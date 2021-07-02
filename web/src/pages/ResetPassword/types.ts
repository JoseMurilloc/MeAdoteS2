import * as Yup from 'yup';

export interface FormValues {
  password: string;
  confirmation_password: string;
  token: string;
}

export const initialValues: FormValues = { 
  password: '', 
  confirmation_password: '',
  token: ''
};

export const ForgotPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Minimo seis caracteres!')
    .required('Campo obrigatório'),
  confirmation_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 
      'Senha não correspondem'
    )
});

