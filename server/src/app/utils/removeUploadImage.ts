import {resolve} from 'path';
import uploadConfig from '../../config/upload';
import fs from 'fs';
import { PhotosDTO } from '../data/pet/dtos/PhotosDTO';

export async function removeUploadImages(filenames: PhotosDTO[]) {

  for (let i=0; i < filenames.length; i++) {
    const filePath = resolve(
      uploadConfig.uploadsFolder,
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
    uploadConfig.uploadsFolder,
    profileAvatarPath
  );

  try {
    fs.unlinkSync(filePath)
  } catch(err) {
    console.error(err)
  }
}


