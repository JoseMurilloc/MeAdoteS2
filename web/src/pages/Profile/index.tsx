import { Form, Formik, FormikHelpers } from 'formik';
import HeaderUserSignIn from '../../components/HeaderUserSignIn'
import Input from '../../components/Input'
import {Container, UploadImageProfile} from './styles'

import userCircleIcon from '../../assets/icons/user/user_circle.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import lockIcon from '../../assets/icons/basic/lock.svg'
import callPhoneIcon from '../../assets/icons/basic/call_phone.svg'
import { FormValues, ProfileSchema, ResponseUpdateProfile } from './types'
import { useCallback, useEffect } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hook/auth';
import { useState } from 'react';
import { useToast } from '../../hook/ToastContext';
import { useHistory } from 'react-router-dom';

type User = {
  name: string;
  cpf: string;
  email: string
  profile_avatar?: string
  contact_whatsapp: string
}

export function Profile() {
  const {push} = useHistory()
  const {user, changeUserName} = useAuth()
  const [userAuthenticated, setUserAuthenticated] = useState<User>({} as User);
  const { error, success } = useToast()

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
    contact_whatsapp: userAuthenticated.contact_whatsapp,
    name: userAuthenticated.name,
    cpf: userAuthenticated.cpf,
  };

  const handleSubmitForm = useCallback(async (values: FormValues, actions: FormikHelpers<FormValues>) => {  
    try { 
      const { data } = await api.put<ResponseUpdateProfile>(`/profiles`, values)

      const {user} = data;
      
      setUserAuthenticated(user)
      changeUserName(user.name)

      success("Dados atualizados com sucesso!")
      

    } catch(err) {
      error(err.response.data.message)
    }

  }, [error, success, changeUserName])


  return (
    <>
      <HeaderUserSignIn />
      <Container>
      <Formik
          enableReinitialize={true}
          initialValues={initialValuesProfile}
          validationSchema={ProfileSchema}
          onSubmit={(values, actions) => {
            handleSubmitForm(values, actions)
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
                <button 
                  className="cancel"
                  onClick={() => push('/initial')}
                >
                  Cancelar
                </button>
                <button type="submit" className="save">Salvar</button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}