import { AdoptData } from "../../data/adopt";
import { PetData } from "../../data/pet";
import { UserData } from "../../data/user";
import { AddressData } from "../../data/user/address"
import AppError from "../../errors/AppError";
import createAddressServices from "../address/CreateAddressServices";

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

    // TODO verify

    await this.adoptData.create({
      idUser,
      idPet,
      dateReceive
    })

    // TODO Update pet of reservation true the adopt

    await this.petData.reservation(idPet)

  }
}

export default new CreateAdoptServices();
