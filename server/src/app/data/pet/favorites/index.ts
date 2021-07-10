import db from "../../../../database";
import AppError from "../../../errors/AppError";
import { sqlFavoriteOfPet, sqlVerifyFavoriteExist } from "./sql/insert";
import { sqlListAllIdByPetsFavorites, sqlListAllPetsFavorites } from "./sql/select";

export class FavoriteData {
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

