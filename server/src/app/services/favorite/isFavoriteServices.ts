import { FavoriteData } from "@data/pet/favorites"

type IRequest = {
  idUser: number;
  idPet: number;
}

class isFavoriteServices {
  private favoriteData: FavoriteData

  constructor() {
    this.favoriteData = new FavoriteData()
  }

  public async execute({idUser, idPet}: IRequest): Promise<boolean> {
    return await this.favoriteData.isFavorite({ idUser, idPet})
  }
}

export default new isFavoriteServices()

