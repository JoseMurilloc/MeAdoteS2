import db from "../../../database";
import AppError from "../../errors/AppError";
import { sqlInsertPhone } from "./sql/create";

export class PhoneData {

  public async createPhone(idUser: number, number: string) {
    return db.any(
      sqlInsertPhone,
      [number, idUser]
    ).catch(error => {
      throw new AppError(error.message)
    })
  }
}
