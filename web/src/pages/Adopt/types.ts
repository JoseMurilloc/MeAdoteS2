import * as Yup from 'yup';

export interface FormValues {
  email: string;
}

export const initialValues: FormValues = { 
  email: '', 
};

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Formato inválido para email')
    .required('Campo obrigatório'),
});

export type PetAdopt = {
  id?: number;
  name: string;
  age: number;
  gender: string;
  description: string;
  castrated: boolean;
  id_specie: number;
  photos: Array<string>
}

