import React from 'react';

import { ContainerContent } from './styles';
import { Form, Formik } from 'formik';
import { initialValues, SignUpSchema } from './types';

import Input from '../../components/Input';
import userCircleIcon from '../../assets/icons/user/user_circle.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import lockIcon from '../../assets/icons/basic/lock.svg'
import callPhoneIcon from '../../assets/icons/basic/call_phone.svg'
import { Authentication } from '../../components/Authentication';

const SignUp: React.FC = () => {

  return (
    <Authentication>
      <ContainerContent>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
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
                || (errors.password && touched.password)
              ) ? (
                <div id="errorGlobalMessage">
                  <span>
                    Erro nas informações inseridas, tente novamente.
                  </span>
                </div>
              ) : (
                <div>&nbsp;</div>
              )}

              <Input 
                icon={userCircleIcon}
                name="name" 
                placeholderLabel="name" 
                spellCheck={false}
                isError={errors.name && touched.name}
              />

              <Input 
                icon={mailIcon}
                name="email" 
                placeholderLabel="E-mail" 
                spellCheck={false}
                isError={errors.email && touched.email}
              />

              <Input
                icon={lockIcon}
                name="password"
                placeholderLabel="Senha"
                type="password"
                isError={errors.password && touched.password}
              />

              <Input
                icon={lockIcon}
                name="password_confirmation"
                placeholderLabel="Confirmar Senha"
                type="password" 
                isError={
                  errors.password_confirmation 
                  && touched.password_confirmation
                }
              />

              <Input
                icon={callPhoneIcon}
                name="phone"
                placeholderLabel="Telefone"
                type="phone"
                isError={errors.phone && touched.phone} 
              />

              <button type="submit">Cadastrar</button>
            </Form>
          )}
        </Formik>
      </ContainerContent>
    </Authentication>
  );
};

export default SignUp;
