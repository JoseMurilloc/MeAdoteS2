import db from '../../../database/index'
import AppError from '../../errors/AppError'
import { UploadPhotoPetDTO } from './dtos/UploadPhotoPetDTO'
import { sqlUploadPhotoOfPet } from './sql/insert'
import { sqlSelectAllPets, sqlSelectPetById } from './sql/select'

/**
 * 📝 Class for manipulation data for pets
 */
export class PetData {
  public async getPetById(id: number) {
    return db.any(sqlSelectPetById, [id])
      .then(success => {
        console.log(success)
        return success[0]
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

  public async getAllPets(page = 1, specie: string) {
    return db.any(sqlSelectAllPets, [specie, page])
      .catch(err => {
        throw new AppError(err.message)
      })
  }
}

