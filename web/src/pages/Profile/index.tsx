import { Form, Formik } from 'formik';
import HeaderUserSignIn from '../../components/HeaderUserSignIn'
import Input from '../../components/Input'
import {Container, UploadImageProfile} from './styles'

import userCircleIcon from '../../assets/icons/user/user_circle.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import lockIcon from '../../assets/icons/basic/lock.svg'
import callPhoneIcon from '../../assets/icons/basic/call_phone.svg'
import { FormValues, ProfileSchema } from './types'
import { useEffect } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hook/auth';
import { useState } from 'react';

type User = {
  name: string;
  cpf: string;
  email: string
  profile_avatar?: string
  contact_whatsapp: string
}

export function Profile() {
  const {user} = useAuth()
  const [userAuthenticated, setUserAuthenticated] = useState<User>({} as User);

  useEffect(() => {
    api.get<User>(`/users/${user.id}`)
      .then(response => {
        setUserAuthenticated(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [user.id])

  const initialValuesProfile: FormValues = { 
    email: userAuthenticated.email, 
    password: '',
    contact_whatsapp: userAuthenticated.contact_whatsapp,
    name: userAuthenticated.name,
    cpf: userAuthenticated.cpf,
    confirmation_password: '',
  };


  return (
    <>
      <HeaderUserSignIn />
      <Container>
      <Formik
          enableReinitialize={true}
          initialValues={initialValuesProfile}
          validationSchema={ProfileSchema}
          onSubmit={(values, actions) => {
            console.log(values)
          }}
        >
          {({ errors, touched, values }) => (           
            <Form>

              <UploadImageProfile>
                <input type="file" name="profile_avatar" />
                <span>{userAuthenticated.name}</span>
                
                <p>Informações do perfil</p>
              </UploadImageProfile>

              
              <Input 
                icon={userCircleIcon}
                name="name" 
                placeholderLabel="Nome" 
                spellCheck={false}
                isError={errors.name && touched.name}
                value={values.name}
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
                icon={callPhoneIcon}
                name="contact_whatsapp"
                placeholderLabel="Whatsapp"
                type="phone"
                isError={errors.contact_whatsapp && touched.contact_whatsapp} 
              />

              <div className="ButtonsContainer">
                <button className="cancel">Cancelar</button>
                <button className="save">Salvar</button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}