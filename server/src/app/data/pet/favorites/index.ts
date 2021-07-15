import db from "../../../../database";
import AppError from "../../../errors/AppError";
import { KeysToFavoritesDto } from "./dtos/KeysToFavoritesDTO";
import { sqlDeleteFavoritePet } from "./sql/delete";
import { sqlFavoriteOfPet, sqlVerifyFavoriteExist } from "./sql/insert";
import { sqlIsFavoritePet, sqlListAllIdByPetsFavorites, sqlListAllPetsFavorites } from "./sql/select";

  export class FavoriteData {

  public async isFavorite({idUser, idPet}: KeysToFavoritesDto) : Promise<boolean> {
    return db.any(sqlIsFavoritePet, [idUser, idPet])
      .then(success => success.length ? true : false)
  }

  public async deleteFavoriteData({idUser, idPet}: KeysToFavoritesDto) {
    return db.any(sqlDeleteFavoritePet, [idUser, idPet])
      .then(success => {
        if (success.length === 0) {
          throw new AppError('Not favorite meet with is idPet')
        }
        return success
      })
  }

  public async favoritesOfPet(idPet: number, idUser: number) {
    return db.any(sqlFavoriteOfPet, [idPet, idUser])
      .catch(err => {
        throw new AppError(err.message)
      })
  }

  public async listAllPetsFavorites(idUser: number, specie: string) {
    const listIdPets =
      await db.any(sqlListAllIdByPetsFavorites, [idUser, specie])

    if (!listIdPets[0]) {
      return []
    }


    return db.any(sqlListAllPetsFavorites, [listIdPets[0].array_agg])
      .catch(err => {
        throw new AppError(err.message)
      })

  }

  public async VerifyFavoriteExist(idPet: number, idUser: number) {
    return db.any(sqlVerifyFavoriteExist, [idPet, idUser])
      .then(success => success.length > 0 ? true : false)
  }
}

