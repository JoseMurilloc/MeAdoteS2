import db from '../../../database/index'
import bcrypt from 'bcryptjs'
import AppError from '@errors/AppError'
import { CreateUserDTO } from './dtos/CreateUserDTO'
import { GetAllUsersDTO } from './dtos/GetAllUsersDTO'
import { GetUserByEmailDTO } from './dtos/GetUserByEmailDTO'
import { sqlSelectByEmail, sqlSelectUser, sqlVerifyIfUserIsAdm } from './sql/select'
import { sqlAddUser } from './sql/insert'
import { sqlAddAddressByUser, sqlUpdatePasswordUser, sqlUpdateProfile, sqlUpdateProfileAvatar } from './sql/update'
import { UploadProfileDTO } from './dtos/UploadProfileDTO'
import { UpdateProfileDTO } from './dtos/UpdateProfileDTO'
import { TokenUsers } from './tokenUsers'

/**
 * 📝 Class for manipulation data for user
 * All features who belong of Token of user is here on class
 * token
 */
export class UserData extends TokenUsers {

  constructor() {
    super()
  }

  public async verifyUniqueEmailAndCPF(email: string, cpf: string) {
    return db.any(
      'SELECT * FROM users WHERE email=$1 OR cpf=$2',
      [email, cpf]
    )
      .then(response => response.length === 0 ? true : false)
  }

  public async getUserAdministration(idUser: number) {
    return db.any(sqlVerifyIfUserIsAdm, [idUser])
      .then(success => success.length === 0 ? false: true)
  }

  public async addAddressByUser(idAddress: number, idUser: number) {
    return db.any(sqlAddAddressByUser, [idAddress, idUser])
      .catch(err => {
        throw new AppError(err.message)
      })
  }


  public async updatePassword(newPassword: string, idUser: number) {
    return db.any(sqlUpdatePasswordUser, [newPassword, idUser])
      .catch(error => {
        throw new AppError(error.message)
      })
  }


  public async updateProfile(
    {name, email, contact_whatsapp, cpf, idUser}: UpdateProfileDTO
  ) {
    return db.any(
      sqlUpdateProfile,
      [name, email, contact_whatsapp, cpf, idUser]
    )
      .then(success => {
        return success[0]
      })
      .catch(error => {
        throw new AppError(error.message)
      })
  }

  public async getUser(id: string) : Promise<GetAllUsersDTO> {
    const users = await db.query<GetAllUsersDTO[]>(
      sqlSelectUser, [id]
    )

    if (users.length === 0) {
      throw new AppError('No users found')
    }

    if (users[0].profile_avatar) {
      const user = {
        ...users[0],
        profile_avatar:
          `http://localhost:3333/files/${users[0].profile_avatar}`,
        profileAvatarPath: users[0].profile_avatar
      }

      return user
    }

    return users[0]
  }

  public async uploadProfileAvatarUser({ filename, idUser}: UploadProfileDTO) {
    return db.any(
      sqlUpdateProfileAvatar,
      [filename, idUser]
    )
    .then(success => {
      return success[0]
    })
    .catch(error => {
      throw new AppError(error.message)
    })
  }

  public async getUserByEmail(email: string) : Promise<GetUserByEmailDTO[]> {
    const users = await db.query<GetUserByEmailDTO[]>(
      sqlSelectByEmail,[email]
    )
    return users
  }

  public async createUser(data: CreateUserDTO) : Promise<any> {
    const { name, cpf, email, password, contact_whatsapp } = data

    const hasPassword = await bcrypt.hash(password, 8)

    return db.any(
      sqlAddUser,
      [name, cpf, email, hasPassword, contact_whatsapp]
    )
  }
}

