import { ContainerContent } from './styles';
import { Form, Formik } from 'formik';
import { ForgotPasswordSchema, initialValues } from './types';
import Input from '../../components/Input';

import mailIcon from '../../assets/icons/basic/mail.svg'

const ForgotPassword: React.FC = () => {

  return (
    <ContainerContent>
      <Formik
        initialValues={initialValues}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
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
                  // isErrored={errors.email && touched.email}
                />

            
              <button type="submit">
                Entrar
              </button>
            </Form>
          )}
      </Formik>
    </ContainerContent>
  );
};

export default ForgotPassword;
