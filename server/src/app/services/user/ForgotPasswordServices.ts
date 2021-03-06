import crypto from 'crypto'
import { UserData } from '@data/user';
import Mail from '../../../libs/Mail'

type IRequest = {
  email: string;
}

export class ForgotPasswordServices {
  private userData: UserData

  constructor() {
    this.userData = new UserData();
  }

  public async execute({ email }: IRequest) {
    const user = await this.userData.getUserByEmail(email)

    const existToken =
      await this.userData.checkIsExistToken(user.id)

    const token = crypto.randomBytes(20).toString('hex')

    if (existToken) {
      await this.userData.updateToken(user.id, token)
    } else {
      await this.userData.createToken(user.id, token)
    }


    await Mail.sendMail({
      email,
      subject: 'Recuperação de senha do Me Adote',
      html: `<a href="http://localhost:3000/reset-password?token=${token}" target="_blank">Clique aqui para ir pagina de redfinação de senha</a>`,
    })

  }
}
