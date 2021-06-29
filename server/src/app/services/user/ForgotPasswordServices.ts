import { UserData } from '../../data/user';
import Mail from '../../../libs/Mail'
import crypto from 'crypto'

type IRequest = {
  email: string;
}

export class ForgotPasswordServices {
  private userData: UserData

  constructor() {
    this.userData = new UserData();
  }

  public async execute({ email = 'lazaro@gmail.com' }: IRequest) {

    const user = await this.userData.getUserByEmail(email)

    const existToken =
      await this.userData.checkIsExistTokenForgotPassword(user.id)

    const token = crypto.randomBytes(20).toString('hex')

    if (existToken) {
      await this.userData.updateTokenForgotPassword(user.id, token)
    } else {
      await this.userData.createTokenForgotPassword(user.id, token)
    }


    await Mail.sendMail({
      email,
      subject: 'Recuperação de senha do Me Adote',
      text: 'Recuperação de senha do me adote',
      html: `${token}`,
    })

  }
}
