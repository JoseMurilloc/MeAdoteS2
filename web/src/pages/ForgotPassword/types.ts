import * as Yup from 'yup';

interface FormValues {
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

