import { UserData } from "../../data/user";

type IRequest = {
  name: string;
  cpf: string;
  email: string;
  password: string;
  profile_avatar?: string;
  gender: string;
  contact_whatsapp: string;
}

export class CreateUserService {
  private userData: UserData;

  constructor() {
    this.userData = new UserData()
  }

  public async execute(
    {email, password, name, cpf, gender, contact_whatsapp}: IRequest
  ) {
    await this.userData.createUser({
      email,
      password,
      name,
      cpf,
      gender,
      contact_whatsapp
    })
  }
}
