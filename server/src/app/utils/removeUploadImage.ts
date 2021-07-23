import {resolve} from 'path';
import {multerUserConfig} from '../../config/upload'
import {multerPetConfig} from '../../config/multer'
import fs from 'fs';
import { PhotosDTO } from '../data/pet/dtos/PhotosDTO';

export async function removeUploadImages(filenames: PhotosDTO[]) {

  for (let i=0; i < filenames.length; i++) {
    const filePath = resolve(
      multerPetConfig.uploadsFolder,
      filenames[i].filename
    )

    try {
      fs.unlinkSync(filePath)
    } catch(err) {
      console.error(err)
    }
  }
}
export async function removeUploadImage(profileAvatarPath: string) {
  const filePath = resolve(
    multerUserConfig.uploadsFolder,
    profileAvatarPath
  );

  try {
    fs.unlinkSync(filePath)
  } catch(err) {
    console.error(err)
  }
}


