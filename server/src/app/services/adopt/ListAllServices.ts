import { AdoptData } from "../../data/adopt"

type IRequest = {
  idUser: number
}

class ListAllServices {
  private adoptData: AdoptData

  constructor() {
    this.adoptData = new AdoptData()
  }

  public async execute({idUser}: IRequest) {
    return this.adoptData.listMysPetsAdopts(idUser)
  }

}

export default new ListAllServices()
