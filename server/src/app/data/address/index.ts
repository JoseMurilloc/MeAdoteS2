import db from '@database'
import { CreateAddress } from './dtos/CreateAddress'
import { sqlCreateAddress } from './sql/insert'
import { sqlListAddressByUser } from './sql/select'

export class AddressData {

  public async listAddressByUser(idUser: number) {
    return db.any(sqlListAddressByUser, [idUser])
      .then(success => success[0])
  }

  public async verifyExistAddressByUser(id: number) {
    return db.any(
      'SELECT * FROM users WHERE id=$1 AND id_address IS NOT NULL;',
      [id]
    )
      .then(success => success[0])
  }

  public async create(
    { city, district, number, state, street }: CreateAddress
  ) {
    return db.any(
      sqlCreateAddress,
      [state, city, district, street, number]
    )
    .then(success => success[0])
  }
}
