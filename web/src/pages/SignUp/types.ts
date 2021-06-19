import * as Yup from 'yup'

export type FormValues = {
  email: string;
  password: string;
  name: string;
  password_confirmation: string;
  phone: string;
}

export const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Minimo seis caracteres!')
    .required('Campo obrigatório'),
  name: Yup.string()
    .min(6, 'Minimo seis caracteres!')
    .required('Campo obrigatório'),
  phone: Yup.string()
    .required('Campo obrigatório'),
  email: Yup
    .string()
    .email('Formato inválido para email')
    .required('Campo obrigatório'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 
      'Senha não correspondem'
    )
});
