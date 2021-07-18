import { AdoptData } from "../../data/adopt"
import { PetData } from "../../data/pet"

type IRequest = {
  idUser: number
  idPet: number
}

class CancelAdoptServices {
  private adoptData: AdoptData
  private petData: PetData

  constructor() {
    this.adoptData = new AdoptData()
    this.petData = new PetData()
  }

  public async execute({ idUser, idPet }: IRequest) {
    await this.adoptData.cancellationAdopt(idUser, idPet)
    await this.petData.liberationPet(idPet)
  }
}

export default new CancelAdoptServices()
