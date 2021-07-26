import { PetData } from "@data/pet"

type IRequest = {
  limit: number
}

class ListPetsServices {
  private petData: PetData

  constructor() {
    this.petData = new PetData()
  }

  async execute({ limit }: IRequest) {
    const pets = await this.petData.getDogsToHomePage(limit)

    return pets
  }
}

export default new ListPetsServices()
