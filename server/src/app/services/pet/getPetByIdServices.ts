import { PetData } from "../../data/pet"

type IRequest = {
  id: number,
}

class getPetByIdServices {
  private petData: PetData

  constructor() {
    this.petData = new PetData()
  }

  public async execute({ id }: IRequest): Promise<any> {
    const user = await this.petData.getPetById(id)

    const photos = await this.petData.getPhotosByPetId(id)

    return { ...user, photos }
  }
}

export default new getPetByIdServices()
