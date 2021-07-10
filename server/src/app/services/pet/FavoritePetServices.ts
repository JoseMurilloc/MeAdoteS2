import { PetData } from "../../data/pet"
import AppError from "../../errors/AppError"

type IRequest = {
  idUser: number;
  idPet: number;
}

class FavoritePetServices {

  private petData: PetData

  constructor() {
    this.petData = new PetData()
  }

  public async execute({idPet, idUser}: IRequest) {

    const verifyExist = await
      this.petData.VerifyFavoriteExist(idPet, idUser)


    if (verifyExist) {
      throw new AppError('This pet is already favorite')
    }

    return await this.petData.favoritesOfPet(idPet, idUser)
  }
}

export default new FavoritePetServices()
