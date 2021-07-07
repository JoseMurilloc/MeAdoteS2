import { PetData } from "../../data/pet"

type IRequest = {
  specie: string;
  page: number
}

class ListAllPetsServices {
  public async execute({ page, specie }: IRequest) {

    const petData = new PetData()
    const pets = await petData.getAllPets(page, specie)
    const petsWithUrlOfPhotosFormatted = pets.map(pet => {
      const photosUrl = pet.photos?.map((p: string) => `http://localhost:3333/files/${p}`)

      return {...pet, photos: photosUrl}
    })

    return petsWithUrlOfPhotosFormatted
  }
}

export default new ListAllPetsServices()

