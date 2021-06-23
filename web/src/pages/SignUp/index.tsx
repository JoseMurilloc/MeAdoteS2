import React, { useCallback } from 'react';

import { ContainerContent } from './styles';
import { Form, Formik, ErrorMessage } from 'formik';
import { initialValues, SignUpSchema, FormValues } from './types';

import Input from '../../components/Input';
import userCircleIcon from '../../assets/icons/user/user_circle.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import lockIcon from '../../assets/icons/basic/lock.svg'
import callPhoneIcon from '../../assets/icons/basic/call_phone.svg'
import { Authentication } from '../../components/Authentication';
import { useToast } from '../../hook/ToastContext';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { removeMasks } from '../../utils/removeMasks';

const SignUp: React.FC = () => {
  const {success, error} = useToast()
  const history = useHistory()

  const handleSubmitForm = useCallback(async (values: FormValues) => {
    
    const { 
      email, password, name, contact_whatsapp, cpf, confirmation_password
    } = values

    const data = removeMasks(cpf, contact_whatsapp)

    try { 
      const credentials = {
        email,  
        password,
        name, 
        contact_whatsapp: data.contactParserMask,
        cpf: data.cpfParserMask,
        confirmation_password
      }

      await api.post('/users', credentials)
      success("Register user")

      history.push('/sign-in')
    } catch(err) {
      error('Ocorreu um erro ao fazer o login, cheque as cresdenciais.')
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

              <Input
                icon={userCircleIcon}
                name="name" 
                placeholderLabel="Nome" 
                spellCheck={false}
                isError={errors.name && touched.name}
              />

              <div className="errorGlobalMessage">
                <span>
                  <ErrorMessage name="name" />
                </span>
              </div>


              <Input 
                icon={userCircleIcon}
                name="cpf" 
                placeholderLabel="CPF" 
                spellCheck={false}
                isError={errors.cpf && touched.cpf}
              />
              
              <div className="errorGlobalMessage">
                <span>
                  <ErrorMessage name="cpf" />
                </span>
              </div>

              <Input 
                icon={mailIcon}
                name="email" 
                placeholderLabel="E-mail"
                type="email"
                spellCheck={false}
                isError={errors.email && touched.email}
              />
              <div className="errorGlobalMessage">
                <span>
                  <ErrorMessage name="email" />
                </span>
              </div>


              <Input
                icon={lockIcon}
                name="password"
                placeholderLabel="Senha"
                type="password"
                isError={errors.password && touched.password}
              />
              <div className="errorGlobalMessage">
                <span>
                  <ErrorMessage name="password" />
                </span>
              </div>

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

              <div className="errorGlobalMessage">
                <span>
                  <ErrorMessage name="confirmation_password" />
                </span>
              </div>

              <Input
                icon={callPhoneIcon}
                name="contact_whatsapp"
                placeholderLabel="Whatsapp"
                type="phone"
                isError={errors.contact_whatsapp && touched.contact_whatsapp} 
              />
              <div className="errorGlobalMessage">
                <span>
                  <ErrorMessage name="contact_whatsapp" />
                </span>
              </div>


              <button type="submit">Cadastrar</button>
            </Form>
          )}
        </Formik>
      </ContainerContent>
    </Authentication>
  );
};

export default SignUp;
