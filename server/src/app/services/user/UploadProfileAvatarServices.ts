import { UserData } from '../../data/user'
import fs from 'fs'
import path from 'path'
import uploadConfig from '../../../config/upload'

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
      // delete image folder temp/*
      const filePath = path.resolve(
        uploadConfig.uploadsFolder,
        filename
      );

      try {
        fs.unlinkSync(filePath)
        //file removed
      } catch(err) {
        console.error(err)
      }
    }

    return await this.userData.uploadProfileAvatarUser({
      filename,
      idUser
    })
  }
}
