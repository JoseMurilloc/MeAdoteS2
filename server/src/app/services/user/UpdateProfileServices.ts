import { UserData } from "../../data/user";

type IRequest = {
  user: {
    name: string;
    email: string;
    cpf: string;
    contact_whatsapp: string;
    idUser: string;
  }
}


export class UpdateProfileServices {
  private userData: UserData;

  constructor() {
    this.userData = new UserData()
  }

  public async execute({user}: IRequest){
    return await this.userData.updateProfile(user)
  }
}
