import { UserData } from '../../data/user/index'
import bcryptjs from 'bcryptjs';
import AppError from '../../errors/AppError';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../config/auth'

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

    const verifyPassword = bcryptjs.compare(
      user.email,
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
        name: userByEmail.name,
        email: userByEmail.email,
      },
      token
    }
  }

}
