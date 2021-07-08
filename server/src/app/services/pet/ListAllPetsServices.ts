import { PetData } from "../../data/pet"
import { handleFilenameForUrl } from "../../utils/handleFilenameForUrl"

type IRequest = {
  specie: string;
  page: number
}

class ListAllPetsServices {
  public async execute({ page, specie }: IRequest) {

    const petData = new PetData()
    const pets = await petData.getAllPets(page, specie)
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

export default new ListAllPetsServices()

