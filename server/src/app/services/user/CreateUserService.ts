import { UserData } from "../../data/user";
import AppError from "../../errors/AppError";

type IRequest = {
  name: string;
  cpf: string;
  email: string;
  password: string;
  profile_avatar?: string;
  contact_whatsapp: string;
}

export class CreateUserService {
  private userData: UserData;

  constructor() {
    this.userData = new UserData()
  }

  public async execute(
    {email, password, name, cpf, contact_whatsapp}: IRequest
  ) {

    const verifyUnique =
      await this.userData.verifyUniqueEmailAndCPF(email, cpf)

    if (!verifyUnique) {
      throw new AppError('Email OR CPF already exist')
    }

    await this.userData.createUser({
      email,
      password,
      name,
      cpf,
      contact_whatsapp
    })
  }
}
