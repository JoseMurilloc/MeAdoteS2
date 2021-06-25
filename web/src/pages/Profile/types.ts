import * as Yup from 'yup'

export type FormValues = {
  email: string;
  password: string;
  name: string;
  confirmation_password: string;
  contact_whatsapp: string;
  cpf: string;
}



export const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Minimo seis caracteres!')
    .required('Campo obrigatório'),
  cpf: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Formato valido somente CPF"),
  contact_whatsapp: Yup.string()
    .required('Campo obrigatório')
    .matches(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/, "Formato de telefone incorreto"),
  email: Yup
    .string()
    .email('Formato inválido para email')
    .required('Campo obrigatório'),
});
