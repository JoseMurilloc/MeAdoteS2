import { Formik, Form } from 'formik'

import Input from '../../components/Input';

import { ContainerContent } from './styles';
import { IconSigIn } from '../../utils/icons'
import { FormValues, initialValues, SignInSchema } from './types';
import { useToast } from '../../hook/ToastContext';
import { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import userCircleIcon from '../../assets/icons/user/user_circle.svg'
import lockIcon from '../../assets/icons/basic/lock.svg'
import { useAuth } from '../../hook/auth';
import { Authentication } from '../../components/Authentication';

const SignIn: React.FC = () => {


  const history = useHistory()
  const {sigIn, user} = useAuth()
  const {success, error} = useToast()
  

  const handleSubmitForm = useCallback(async (values: FormValues) => {
    
    const { email, password } = values
    
    try { 
      const credentials = {
        email,  
        password,
      }
      await sigIn(credentials)

      success("Success login")

      history.push('/initial')
    } catch {
      error("Error login")
    }

  }, [sigIn, success, history, error])

  return (
    <Authentication>
      <ContainerContent>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={(values, actions) => 
            handleSubmitForm(values)
          }
        >
          {({ errors, touched, values }) => (

            <Form>
              <legend>Bem vindo</legend>
              <h1>Adote por amor</h1>
              <header>
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
              </header>
              

              <Input 
                icon={userCircleIcon}
                name="email" 
                type="email"
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

              <Link to="forgot-password">
                <div id="forgot_password">
                  <span>Esqueci minha senha</span>
                </div>
              </Link>

              <button
                type="submit"
                disabled={!values.email || !values.password}
              >
                Entrar
              </button>

              <div className="socialContainer">
                <div>
                  <IconSigIn.FaFacebookF color="#393A3A" size={20} />
                </div>
                
                <div>
                  <IconSigIn.MdEmail color="#393A3A" size={20} />
                </div>

                <div>
                  <IconSigIn.FaTwitter color="#393A3A" size={20}/>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </ContainerContent> 
    </Authentication>
  );
};


export default SignIn;