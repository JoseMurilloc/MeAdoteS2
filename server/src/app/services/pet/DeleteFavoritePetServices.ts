import { FavoriteData } from "../../data/pet/favorites"

type IRequest = {
  idPet: number
  idUser: number
}

class DeleteFavoritePetServices {
  private favoriteData: FavoriteData

  constructor() {
    this.favoriteData = new FavoriteData()
  }

  public async execute({ idUser, idPet}: IRequest): Promise<void> {
    await this.favoriteData.deleteFavoriteData({ idUser, idPet})
  }
}

export default new DeleteFavoritePetServices()
