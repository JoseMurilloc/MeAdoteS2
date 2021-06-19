import * as Yup from 'yup'

export interface FormValues {
  email: string;
  password: string;
}

export const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Minimo seis caracteres!')
    .required('Campo obrigatório'),
  email: Yup
    .string()
    .email('Formato inválido para email')
    .required('Campo obrigatório'),
});
