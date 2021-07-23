import { UserData } from '../../data/user'
import { removeUploadImage } from '../../utils/removeUploadImage'

interface IRequest {
  filename: string;
  idUser: string;
}

export class UploadProfileAvatarServices {
  private userData: UserData;

  constructor () {
    this.userData = new UserData()
  }

  public async execute({ filename, idUser}: IRequest) {
    const user = await this.userData.getUser(idUser)

    if (user.profile_avatar) {
      await removeUploadImage(user.profileAvatarPath)
    }

    return await this.userData.uploadProfileAvatarUser({
      filename,
      idUser
    })
  }
}
