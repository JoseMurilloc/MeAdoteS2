import React from 'react';

import { ContainerContent } from './styles';
import { Form, Formik } from 'formik';
import { FormValues, SignUpSchema } from './types';

import Input from '../../components/Input';
import userCircleIcon from '../../assets/icons/user/user_circle.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import lockIcon from '../../assets/icons/basic/lock.svg'
import callPhoneIcon from '../../assets/icons/basic/call_phone.svg'

const SignUp: React.FC = () => {

  const initialValues: FormValues = { 
    email: '', 
    password: '',
    phone: '',
    name: '',
    password_confirmation: ''
  };


  return (
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
              // isErrored={errors.name && touched.name}
            />

            <Input 
              icon={mailIcon}
              name="email" 
              placeholderLabel="E-mail" 
              spellCheck={false}
              // isErrored={errors.email && touched.email}
            />

            <Input
              icon={lockIcon}
              name="password"
              placeholderLabel="Senha"
              type="password"
              // isErrored={errors.password && touched.password}
            />

            <Input
              icon={lockIcon}
              name="password_confirmation"
              placeholderLabel="Confirmar Senha"
              type="password" 
              // isErrored={
              //   errors.password_confirmation 
              //   && touched.password_confirmation
              // }
            />

            <Input
              icon={callPhoneIcon}
              name="phone"
              placeholderLabel="Telefone"
              type="phone"
              // isErrored={errors.phone && touched.phone} 
            />

            <button type="submit">Cadastrar</button>
          </Form>
        )}
      </Formik>
    </ContainerContent>
  );
};

export default SignUp;
