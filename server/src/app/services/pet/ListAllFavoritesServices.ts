import { PetData } from "../../data/pet"
import AppError from "../../errors/AppError"
import { handleFilenameForUrl } from "../../utils/handleFilenameForUrl"

type IRequest = {
  idUser: number;
  specie: string;
}

class ListAllFavoritesServices {

  private petData: PetData

  constructor() {
    this.petData = new PetData()
  }

  public async execute({specie, idUser}: IRequest) {
    const pets = await this.petData
      .listAllPetsFavorites(idUser, specie)

      const petsWithUrlOfPhotosFormatted = pets.map(pet => {
        let photosUrl: string[];

        if (pet.photos) {
          photosUrl = handleFilenameForUrl(pet.photos)
          return {...pet, photos: photosUrl}
        }

        return pet
      })

      return petsWithUrlOfPhotosFormatted
  }
}

export default new ListAllFavoritesServices()
