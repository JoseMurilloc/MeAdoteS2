import db from '../../../database/index'
import AppError from '../../errors/AppError'
import { PhotosDTO } from './dtos/PhotosDTO'
import { PhotosPetDTO } from './dtos/PhotosPetDTO'
import { sqlUploadPhotoOfPet } from './sql/insert'
import { sqlSelectAllPets, sqlSelectPetById } from './sql/select'
import { sqlUpdatePhotosOfPets } from './sql/update'

/**
 * 📝 Class for manipulation data for pets
 */
export class PetData {


  public async updatedPhotos({ filenames, idPet }: PhotosPetDTO){
    return db.any(sqlUpdatePhotosOfPets, [
      filenames[0].filename,
      filenames[1].filename,
      filenames[2].filename,
      filenames[3].filename,
      idPet
    ]).catch(err => {
      throw new AppError(err.message)
    })
  }

  public async getPetById(id: number) {
    return db.any(sqlSelectPetById, [id])
      .then(success => success[0])
      .catch(err => {
        throw new AppError(err.message)
      })
  }

  public async checkExistPhotoByPet(idPet: number): Promise<PhotosDTO[]> {
    return db.any('SELECT id_pet, filename FROM photos WHERE id_pet = $1', [idPet])
      .then(success => success)
  }

  public async uploadPhotoOfPet({ filenames, idPet}: PhotosPetDTO) {

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

