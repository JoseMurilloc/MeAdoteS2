import { sign } from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { UserData } from '@data/user/index'
import AppError from '@errors/AppError';
import authConfig from '@config/auth'

type IRequest = {
  user: {
    email: string;
    password: string;
  }
}

export class AuthenticationUserService {
  private userData: UserData;
  constructor() {
    this.userData = new UserData()
  }

  public async execute({ user }: IRequest) {
    const userByEmail = await
      this.userData.getUserByEmail(user.email);

    if (userByEmail.length === 0) {
      throw new AppError('users not found by email')
    }

    const userFetch = userByEmail[0]

    const {password} = userFetch

    const verifyPassword = await bcryptjs.compare(
      user.password,
      password
    )

    if (!verifyPassword) {
      throw new AppError(
        'Email or password is invalid combination',
        401
      )
    }

    const { id } = userFetch;

    const token = sign(
      {},
      authConfig.secret,
      {
        subject: String(id),
        expiresIn: authConfig.expiresIn
      }
    )

    return {
      user: {
        id,
        name: userFetch.name,
        profile_avatar: userFetch.profile_avatar,
      },
      token
    }
  }

}
