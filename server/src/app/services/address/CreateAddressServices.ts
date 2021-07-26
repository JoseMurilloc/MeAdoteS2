import { AddressData } from "@data/address";

type IRequest = {
  state: string
  city: string
  district: string
  street: string
  number: number
}

class CreateAddressServices {
  private addressData: AddressData

  constructor() {
    this.addressData = new AddressData()
  }

  public async execute(
    {state, city, district, street, number}: IRequest
  ) {
    const idAddress = await this.addressData.create({
      state,
      city,
      district,
      street,
      number
    })

    return idAddress
  }
}

export default new CreateAddressServices();
