import { Form, Formik } from 'formik';
import HeaderUserSignIn from '../../components/HeaderUserSignIn'
import Input from '../../components/Input'
import {Container, UploadImageProfile} from './styles'

import userCircleIcon from '../../assets/icons/user/user_circle.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import lockIcon from '../../assets/icons/basic/lock.svg'
import callPhoneIcon from '../../assets/icons/basic/call_phone.svg'
import { initialValuesProfile, ProfileSchema } from './types'



export function Profile() {

  return (
    <>
      <HeaderUserSignIn />
      <Container>
      <Formik
          initialValues={initialValuesProfile}
          validationSchema={ProfileSchema}
          onSubmit={(values, actions) => {
            console.log(values)
          }}
        >
          {({ errors, touched }) => (           
            <Form>

              <UploadImageProfile>
                <input type="file" name="profile_avatar" />
                <span>Geissy Maysla</span>
                
                <p>Informações do perfil</p>
              </UploadImageProfile>

              
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