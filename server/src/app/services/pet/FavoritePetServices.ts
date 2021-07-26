import { PetData } from "@data/pet"

type IRequest = {
  idUser: number;
  idPet: number;
}

type IResponse = {
  statusCode: number;
  message: string;
}

class FavoritePetServices {

  private petData: PetData

  constructor() {
    this.petData = new PetData()
  }

  public async execute({idPet, idUser}: IRequest) : Promise<IResponse> {

    const verifyExist = await
      this.petData.VerifyFavoriteExist(idPet, idUser)


    if (verifyExist) {
      // TODO Revert favorite pet case user click again
      await this.petData.deleteFavoriteData({ idUser, idPet})
        .then(response => console.log(response))
        .catch(err => console.error(err))

      return {
        message: 'Favorite pet delete with success',
        statusCode: 204
      }
    }

    await this.petData.favoritesOfPet(idPet, idUser)

    return {
      message: 'Favorite pet create with success',
      statusCode: 201
    }

  }
}

export default new FavoritePetServices()
