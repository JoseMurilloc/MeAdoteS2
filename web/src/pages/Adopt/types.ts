import * as Yup from 'yup';

export interface FormValues {
  address: Address;
  date: Date
}


export const AdoptSchema = Yup.object().shape({
  address: Yup.object().shape({
    id: Yup.number().required(),
    cep: Yup.string().required(),
    state: Yup.string().required(),
    city: Yup.string().required(),
    district: Yup.string().required(),
    street: Yup.string().required(),
    number: Yup.number().required(),
  }),
  date: Yup.date()
})
export type PetSelectedToAdopt = {
  id?: number;
  name: string;
  age: number;
  gender: string;
  description: string;
  castrated: boolean;
  id_specie: number;
  photos: Array<string>
}

export type Address = {
  id: number,
  state: string,
  city: string,
  district: string,
  street: string,
  number: number,
  cep?: string
}
