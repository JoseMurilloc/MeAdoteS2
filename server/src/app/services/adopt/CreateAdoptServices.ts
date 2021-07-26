import { isBefore } from "date-fns";
import { AdoptData } from "@data/adopt";
import { PetData } from "@data/pet";
import { UserData } from "@data/user";
import { AddressData } from "@data/address"
import AppError from "@errors/AppError";
import createAddressServices from "@services/address/CreateAddressServices";

type IRequest = {
  idPet: number;
  idUser: number;
  dateReceive: Date;
  address: {
    state: string
    city: string
    district: string
    street: string
    number: number
  }
}

class CreateAdoptServices {

  private addressData: AddressData
  private adoptData: AdoptData
  private userData: UserData
  private petData: PetData

  constructor() {
    this.addressData = new AddressData();
    this.adoptData = new AdoptData();
    this.userData = new UserData();
    this.petData = new PetData();
  }

  public async execute({
    dateReceive,
    idPet,
    idUser,
    address: { state, city, district, street, number }
  }: IRequest) {

    this.validateDateReceive(dateReceive)

    const reservationStatusPet =
      await this.petData.verifyStatusReservation(idPet)

    if(reservationStatusPet) {
      throw new AppError('Pet already booked')
    }

    let user = await
      this.addressData.verifyExistAddressByUser(idUser)

    if (!user) {
      const { id } = await createAddressServices.execute({
        state, city, district, street, number
      })

      await this.userData.addAddressByUser(id, idUser)
    }

    const adoptExist = await this.adoptData.verifyExistAdopt(
      idUser,
      idPet
    )

    if (adoptExist) {
      throw new AppError('This adoption is already marked')
    }

    await this.adoptData.create({
      idUser,
      idPet,
      dateReceive
    })

    await this.petData.reservation(idPet)
  }

  protected async validateDateReceive(dateReceive: Date) {
    const isDateValid = isBefore(new Date(), new Date(dateReceive))
    const HourIsValid = new Date(dateReceive).getHours()
    const validYear = new Date(dateReceive).getFullYear()

    if (!isDateValid) {
      throw new AppError('Is date not worker if before date now')
    }

    if (validYear !== new Date().getFullYear()) {
      throw new AppError('Only if it is the current year')
    }

    if ((HourIsValid < 7 || HourIsValid >= 17)) {
      throw new AppError('Hour request is invalid')
    }

  }
}

export default new CreateAdoptServices();
