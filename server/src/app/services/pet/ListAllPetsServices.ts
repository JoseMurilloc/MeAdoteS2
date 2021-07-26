import { PetData } from "@data/pet"
import { handleFilenameForUrl } from "@utils/handleFilenameForUrl"

type IRequest = {
  specie: string;
  page: number
}

class ListAllPetsServices {
  public async execute({ page, specie }: IRequest) {

    const petData = new PetData()
    const pets = await petData.getAllPets(page, specie)
    const countPets = await petData.countPetsBySpecie(specie)

    const data = pets.map(pet => {
      let photosUrl: string[];

      if (pet.photos) {
        photosUrl = handleFilenameForUrl(pet.photos)
        return {...pet, photos: photosUrl}
      }

      return pet
    })

    return {data, total: Number(countPets.total)}
  }
}

export default new ListAllPetsServices()

