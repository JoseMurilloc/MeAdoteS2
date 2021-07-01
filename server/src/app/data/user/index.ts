import db from '../../../database/index'
import bcrypt from 'bcryptjs'
import AppError from '../../errors/AppError'
import { CreateUserDTO } from './dtos/CreateUserDTO'
import { GetAllUsersDTO } from './dtos/GetAllUsersDTO'
import { GetUserByEmailDTO } from './dtos/GetUserByEmailDTO'
import { sqlSelectByEmail, sqlSelectTokenByPasswordForgot, sqlSelectUser, sqlVerifyIfExistTokePassword } from './sql/select'
import { sqlAddUser, sqlCreateTokenForgotPassword, sqlFindByForgotPasswordTokenUser } from './sql/insert'
import { sqlUpdatePasswordUser, sqlUpdateProfile, sqlUpdateProfileAvatar, sqlUpdateTokenForgotPassword } from './sql/update'
import { UploadProfileDTO } from './dtos/UploadProfileDTO'
import { UpdateProfileDTO } from './dtos/UpdateProfileDTO'
import { sqlDeleteTokenByUserId } from './sql/delete'

/**
 * 📝 Class for manipulation data for user
 */
export class UserData {

  public async deleteTokenByUser(idUser: number) {
    return db.any(sqlDeleteTokenByUserId, [idUser])
      .then(success => {
        console.log(success)
        return success
      })
      .catch(error => {
        throw new AppError(error.message)
      })
  }

  public async updatePassword(newPassword: string, idUser: number) {
    return db.any(sqlUpdatePasswordUser, [newPassword, idUser])
      .catch(error => {
        throw new AppError(error.message)
      })
  }

  public async getUserByTokenForgotPassword(token: string) {
    return db.any(sqlSelectTokenByPasswordForgot, [token])
      .then(success => {
        if (success.length <= 0) {
          throw new AppError('Not token exist')
        }

        return success[0]
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

  public async getUserByEmail(email: string) : Promise<GetUserByEmailDTO> {
    const users = await db.query<GetUserByEmailDTO[]>(
      sqlSelectByEmail,[email]
    )

    if (users.length === 0) {
      throw new AppError('users not found by email')
    }

    const user = users[0];

    return user
  }

  public async checkIsExistTokenForgotPassword(id: number) : Promise<boolean> {
    return db.any(
      sqlVerifyIfExistTokePassword,
      [id]
    )
      .then(success => !!success.length)
      .catch(error => {
        throw new AppError(error.message)
      })
  }

  public async createTokenForgotPassword(id: number, token: string) : Promise<any> {
    return db.any(
      sqlCreateTokenForgotPassword,
      [id, token]
    )
    .catch(error => {
      throw new AppError(error.message)
    })
  }

  public async updateTokenForgotPassword(id: number, token: string) {
    return db.any(sqlUpdateTokenForgotPassword, [token, id])
      .catch(error => {
        throw new AppError(error.message)
      })
  }

  public async createUser(data: CreateUserDTO) : Promise<any> {
    const { name, cpf, email, password, contact_whatsapp } = data

    const hasPassword = await bcrypt.hash(password, 8)

    return db.any(
      sqlAddUser,
      [name, cpf, email, hasPassword, contact_whatsapp]
    )
    .catch(error => {
      throw new AppError(error.message)
    })
  }
}

