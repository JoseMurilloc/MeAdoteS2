import * as Yup from 'yup';

export interface FormValues {
  address: {
    id: number 
    state: string 
    city: string 
    district: string 
    street: string 
    number: number
  }
  date: Date
}


export const AdoptSchema = Yup.object().shape({
  address: Yup.object().shape({
    id: Yup.number().required(),
    state: Yup.string().required(),
    city: Yup.string().required(),
    district: Yup.string().required(),
    street: Yup.string().required(),
    number: Yup.number().required(),
  })
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
  cpe?: string
}
