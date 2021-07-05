import { PetData } from "../../data/pet"

type IRequest = {
  page: number
}

class ListAllPetsServices {
  public async execute({ page }: IRequest) {

    const petData = new PetData()
    const pets = await petData.getAllPets(page)

    return pets
  }
}

export default new ListAllPetsServices()

