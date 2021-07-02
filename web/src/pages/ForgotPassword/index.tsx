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
import { useCallback } from 'react';

const ForgotPassword: React.FC = () => {

  const { success, error } = useToast()

  const handleSubmitForm = useCallback(async (values: FormValues) => {
    api.post(`/users/forgot-password`, values)
      .then(response => {
        success('Email enviado com sucesso')
      })
      .catch(err => {
        error(err.message)
      })
  }, [success, error])

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

                  {(
                    (errors.email && touched.email) 
                    || (errors.email && touched.email)
                  ) ? (
                    <div id="errorGlobalMessage">
                      <span>
                        {errors.email}
                      </span>
                    </div>
                  ) : (
                    <div>&nbsp;</div>
                  )}

                  <Input 
                    icon={mailIcon}
                    name="email" 
                    type="email"
                    placeholderLabel="E-mail"
                    spellCheck={false}
                    isError={errors.email && touched.email}
                  />

              
                <button type="submit">
                  Enviar
                </button>
              </Form>
            )}
        </Formik>
      </ContainerContent>
    </Authentication>
  );
};

export default ForgotPassword;
