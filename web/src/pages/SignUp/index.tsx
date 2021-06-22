import React, { useCallback } from 'react';

import { ContainerContent } from './styles';
import { Form, Formik } from 'formik';
import { initialValues, SignUpSchema, FormValues } from './types';

import Input from '../../components/Input';
import userCircleIcon from '../../assets/icons/user/user_circle.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import lockIcon from '../../assets/icons/basic/lock.svg'
import callPhoneIcon from '../../assets/icons/basic/call_phone.svg'
import { Authentication } from '../../components/Authentication';
import { useAuth } from '../../hook/auth';
import { useToast } from '../../hook/ToastContext';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


const SignUp: React.FC = () => {
  const {success, error} = useToast()
  const history = useHistory()

  const handleSubmitForm = useCallback(async (values: FormValues) => {
    
    const { 
      email, password, name, contact_whatsapp, cpf, confirmation_password
    } = values
    
    try { 
      const credentials = {
        email,  
        password,
        name, 
        contact_whatsapp,
        cpf,
        confirmation_password
      }

      console.log(credentials)
      await api.post('/users', credentials)

      success("Register user")

      history.push('/sign-in')
    } catch(err) {
      error(err.message)
    }

  }, [success, history, error])

  return (
    <Authentication>
      <ContainerContent>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            handleSubmitForm(values)
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
                placeholderLabel="Nome" 
                spellCheck={false}
                isError={errors.name && touched.name}
              />


              <Input 
                icon={userCircleIcon}
                name="cpf" 
                placeholderLabel="CPF" 
                spellCheck={false}
                isError={errors.cpf && touched.cpf}
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
                name="confirmation_password"
                placeholderLabel="Confirmar Senha"
                type="password" 
                isError={
                  errors.confirmation_password 
                  && touched.confirmation_password
                }
              />

              <Input
                icon={callPhoneIcon}
                name="contact_whatsapp"
                placeholderLabel="Whatsapp"
                type="phone"
                isError={errors.contact_whatsapp && touched.contact_whatsapp} 
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
