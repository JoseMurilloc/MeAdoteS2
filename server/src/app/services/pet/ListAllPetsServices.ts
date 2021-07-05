import { PetData } from "../../data/pet"

type IRequest = {
  specie: string;
  page: number
}

class ListAllPetsServices {
  public async execute({ page, specie }: IRequest) {

    const petData = new PetData()
    const pets = await petData.getAllPets(page, specie)

    return pets
  }
}

export default new ListAllPetsServices()

