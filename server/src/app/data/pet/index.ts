import db from '../../../database/index'
import AppError from '../../errors/AppError'
import { UploadPhotoPetDTO } from './dtos/UploadPhotoPetDTO'
import { sqlUploadPhotoOfPet } from './sql/insert'
import { sqlSelectAllPets, sqlSelectPetById } from './sql/select'

/**
 * 📝 Class for manipulation data for user
 * All features who belong of Token of user is here on class
 * token
 */
export class PetData {
  public async getPetById(id: number) {
    return db.any(sqlSelectPetById, [id])
      .then(success => {
        console.log(success)
        return success
      })
      .catch(err => {
        throw new AppError(err.message)
      })
  }

  public async uploadPhotoOfPet({ filenames, idPet}: UploadPhotoPetDTO) {

    return db.any(
      sqlUploadPhotoOfPet,
      [
        filenames[0].filename,
        filenames[1].filename,
        filenames[2].filename,
        filenames[3].filename,
        idPet
      ]
    )
    .catch(err => {
      throw new AppError(err.message)
    })
  }

  public async getAllPets(page = 1) {
    return db.any(sqlSelectAllPets, [page])
      .catch(err => {
        throw new AppError(err.message)
      })
  }
}

