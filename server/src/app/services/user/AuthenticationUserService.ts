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

    const {password} = userByEmail

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

    const { id } = userByEmail;

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
        name: userByEmail.name,
        profile_avatar: userByEmail.profile_avatar,
      },
      token
    }
  }

}
