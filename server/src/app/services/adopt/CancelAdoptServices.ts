import { getDate, isSameDay } from "date-fns"
import { AdoptData } from "../../data/adopt"
import { PetData } from "../../data/pet"
import AppError from "../../errors/AppError"

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

    // Check if you are on the day of
    // If you are then not permission cancellation

    const { date_receive } = await this.adoptData.getAdopt(idUser, idPet)

    const isSameDayAdopt = isSameDay(date_receive, new Date())

    if (isSameDayAdopt) {
      throw new AppError('Can not cancel on your visit day')
    }

    await this.adoptData.cancellationAdopt(idUser, idPet)
    await this.petData.liberationPet(idPet)
  }
}

export default new CancelAdoptServices()
