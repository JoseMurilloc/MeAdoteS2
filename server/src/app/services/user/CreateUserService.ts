import { PhoneData } from "../../data/phone";
import { UserData } from "../../data/user";

type IRequest = {
  name: string;
  cpf: string;
  email: string;
  password: string;
  profile_avatar?: string;
  gender: string;
  number: string;
}

export class CreateUserService {
  private userData: UserData;
  private phoneData: PhoneData;

  constructor() {
    this.userData = new UserData()
    this.phoneData = new PhoneData()
  }

  public async execute({email, password, name, cpf, gender, number}: IRequest) {
    await this.userData.createUser({
      email,
      password,
      name,
      cpf,
      gender,
      number
    })

    
  }
}
