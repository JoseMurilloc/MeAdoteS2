import { AdoptData } from "@data/adopt"

type IRequest = {
  idUser: number
}

class ListAllServices {
  private adoptData: AdoptData

  constructor() {
    this.adoptData = new AdoptData()
  }

  public async execute({idUser}: IRequest) {
    const adopts = await this.adoptData.listMysPetsAdopts(idUser)

    return adopts.map(adopt => {
      if (adopt.filename) {
        return { ...adopt, filename: `http://localhost:3333/files/${adopt.filename}`}
      }
      return adopt
    })
  }

}

export default new ListAllServices()
