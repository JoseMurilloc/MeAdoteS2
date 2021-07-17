import db from "../../../database";
import AppError from "../../errors/AppError";
import { CreateAdoptDto } from "./dtos/CreateAdoptDto";
import { sqlCreateAdopt } from "./sql/insert";
import { sqlSelectAllMyAdopts, sqlVerifyIfExistAdopt } from "./sql/select";

export class AdoptData {

  public async listMysPetsAdopts(idUser: number) {
    return db.any(sqlSelectAllMyAdopts, [idUser]);
  }

  public async verifyExistAdopt(idUser: number, idPet: number) : Promise<boolean> {
    return db.any(sqlVerifyIfExistAdopt, [idUser, idPet])
      .then(success => success.length >= 1 ? true: false)
  }


  public async create({dateReceive, idPet, idUser}: CreateAdoptDto) {
    return db.any(sqlCreateAdopt, [idUser, idPet, dateReceive])
      .catch(err => {
        throw new AppError(err.message)
      })
  }
}


