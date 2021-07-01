import { addHours, isAfter } from "date-fns"
import { UserData } from "../../data/user"
import AppError from "../../errors/AppError"
import {hash} from 'bcryptjs'

type IRequest = {
  password: string;
  token: string;
}

export class ResetPasswordServices {
  private userData: UserData

  constructor() {
    this.userData = new UserData()
  }

  /**
   * [x] Verify if of token send is valid on table token_users_password
   * [x] Catch id of token is user valid
   * [x] Verify if of token is created_at more one day
   * [x] should hash new password is send of args
   * [x] Perform update of user new password and drop table token
   * [x] Delete token by user
   */
  public async execute({password, token}: IRequest) {
    const userToken = await this.userData.getUserByToken(token)
    await this.userData.getUser(userToken.id_user)

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.');
    }

    const newPasswordHash = await hash(password, 8)

    await this.userData.updatePassword(newPasswordHash, userToken.id_user)

    await this.userData.deleteTokenByUser(userToken.id_user)
  }
}
