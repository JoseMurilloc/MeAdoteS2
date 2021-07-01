import db from '../../../../database/index'
import AppError from '../../../errors/AppError'
import { sqlDeleteTokenByUserId } from './sql/delete'
import { sqlCreateTokenForgotPassword } from './sql/insert'
import {
  sqlSelectTokenByPasswordForgot,
  sqlVerifyIfExistTokePassword
} from './sql/select'
import { sqlUpdateTokenForgotPassword } from './sql/update'

export class TokenUsers {

  public async deleteTokenByUser(idUser: number) {
    return db.any(sqlDeleteTokenByUserId, [idUser])
      .catch(error => {
        throw new AppError(error.message)
      })
  }

  public async getUserByToken(token: string) {
    return db.any(sqlSelectTokenByPasswordForgot, [token])
      .then(success => {
        if (success.length <= 0) {
          throw new AppError('Not token exist')
        }

        return success[0]
      })
  }

  public async checkIsExistToken(id: number) : Promise<boolean> {
    return db.any(
      sqlVerifyIfExistTokePassword,
      [id]
    )
      .then(success => !!success.length)
      .catch(error => {
        throw new AppError(error.message)
      })
  }

  public async createToken(id: number, token: string) : Promise<any> {
    return db.any(
      sqlCreateTokenForgotPassword,
      [id, token]
    )
    .catch(error => {
      throw new AppError(error.message)
    })
  }

  public async updateToken(id: number, token: string) {
    return db.any(sqlUpdateTokenForgotPassword, [token, id])
      .catch(error => {
        throw new AppError(error.message)
      })
  }

}

