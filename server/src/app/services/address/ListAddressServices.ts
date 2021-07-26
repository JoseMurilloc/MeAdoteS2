import { AddressData } from "@data/address"

type IRequest = {
  idUser: number
}

class ListAddressServices {
  private addressData: AddressData

  constructor() {
    this.addressData = new AddressData()
  }

  public async execute({idUser}: IRequest) {
    return await this.addressData.listAddressByUser(idUser)
  }
}

export default new ListAddressServices()
