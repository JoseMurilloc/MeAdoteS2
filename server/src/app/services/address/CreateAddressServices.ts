import { AddressData } from "../../data/user/address";

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
    return await this.addressData.create({
      state,
      city,
      district,
      street,
      number
    })
  }
}

export default new CreateAddressServices();
