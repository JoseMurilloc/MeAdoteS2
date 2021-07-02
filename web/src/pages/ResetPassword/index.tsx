import { ContainerContent } from './styles';
import { Form, Formik } from 'formik';
import { 
  ForgotPasswordSchema,
  FormValues,
  initialValues
} from './types';
import Input from '../../components/Input';

import mailIcon from '../../assets/icons/basic/mail.svg'
import { Authentication } from '../../components/Authentication';
import api from '../../services/api';
import { useToast } from '../../hook/ToastContext';
import { useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string'

const ResetPassword: React.FC = () => {
  const {search} = useLocation();
  const { token } = queryString.parse(search)
  const { success, error } = useToast()
  const { push } = useHistory()

  const handleSubmitForm = useCallback(async (values: FormValues) => {
    console.log({ ...values, token})
    api.patch(`/users/reset-password`,  { ...values, token})
      .then(response => {
        push('/sign-in')        
        success('Senha atualizada com sucesso 🤗')
      })
      .catch(err => {
        error('Error na atualização da senha, por favor solicite novamente uma nova senha 😢')
      })
  }, [token, success, error, push])

  return (
    <Authentication>
      <ContainerContent>
        <Formik
          initialValues={initialValues}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values, actions) => {
            handleSubmitForm(values);
          }}
        >
            {({ errors, touched }) => (
              <Form>
                <legend>Bem vindo</legend>
                <h1>Adote por amor</h1>
                <p>
                  Aqui você encontra seu melhor amigo, que irá trazer um colorido diferente para sua vida.
                </p>


                  <Input 
                    icon={mailIcon}
                    name="password" 
                    type="password"
                    placeholderLabel="Nova senha"
                    spellCheck={false}
                    isError={errors.password && touched.password}
                  />


                  <Input 
                    icon={mailIcon}
                    name="confirmation_password" 
                    type="password"
                    placeholderLabel="Confirmação de nova senha"
                    spellCheck={false}
                    isError={errors.confirmation_password && touched.confirmation_password}
                  />

              
                <button type="submit">
                  Confirmar
                </button>
              </Form>
            )}
        </Formik>
      </ContainerContent>
    </Authentication>
  );
};

export default ResetPassword;
