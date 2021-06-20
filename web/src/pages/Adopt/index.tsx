import { useEffect, useState } from "react";
import HeaderUserSignIn from "../../components/HeaderUserSignIn";
import Input from "../../components/Input";
import { Container, ModalDetailsPet } from "./styles";
import { Form, Formik } from "formik";
import { FormValues } from "./types";
import { FaHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import newFriendLogo from '../../assets/images/newFriendLogo.png'

import userCircleIcon from '../../assets/icons/user/user_circle.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import callPhoneIcon from '../../assets/icons/basic/call_phone.svg'

export default function Adopt() {

  const params = useParams()
  
  useEffect(() => {
    console.log(params)
  }, [params])

  const [activeIndexImage, setActiveIndexImage] = useState(0);

  const initialValues: FormValues = {
    email: "",
    phone: "",
    name: "",
  };

  return (
    <Container>
      <HeaderUserSignIn />
      <div className="contentMain">
        <ModalDetailsPet>
          <div className="containerFlex">
            <div className="containerImages">
              <img 
                src="https://edch.org.uk/wp-content/uploads/2019/03/Meet-our-Dogs-580x340.jpg" 
                alt="pet"
              />
              <div className="images">
                  {[0, 1, 2].map((_, index) => (
                    <button 
                      className={activeIndexImage === index ? 'active': ''}
                      type="button"
                      onClick={() => {}}
                    >
                      <img 
                        src="https://edch.org.uk/wp-content/uploads/2019/03/Meet-our-Dogs-580x340.jpg" 
                        alt="Dog"
                      />
                    </button>
                  ))}
                </div>
            </div>
            <div className="info">
              <h1>Name</h1>
              <div className="description">
                <p>
                  Modéstia à parte, eu não sou linda? Meu nome é Lua e eu adoro brincar. Tudo o que eu mais quero é encontrar uma família que me ame e se importe comigo. Quer me adotar?
                </p>
              </div>
              <div className="infoPetCards">
                <aside>
                  Cadastrada
                </aside>
                <aside className="yellow-gradient">
                  Vacinada
                </aside>
                <aside className="red-gradient">
                  femia
                </aside>
                <aside className="green-gradient">
                  1 ano
                </aside>
              </div>
              <div className="detailsPerson">
                <h3>Comportamento:</h3>
                <span>Carinhosa, convive com catos e crianças</span>
              </div>
              <button>
                <FaHeart color="#FFF" size={20} />
                <span>Preferido</span>
              </button>
            </div>
          </div>
        </ModalDetailsPet>
        
        <Formik
          initialValues={initialValues}
          validationSchema={{}}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <img src={newFriendLogo} className="newFriendLogo" />
              <legend>Formulario de adoção</legend>

              <Input
                icon={userCircleIcon}
                name="name" 
                placeholderLabel="Digite seu nome" 
                spellCheck={false}
                isError={errors.name && touched.name}
              />

              <Input
                icon={mailIcon}
                name="email" 
                type="email"
                placeholderLabel="Digite seu e-mail"
                spellCheck={false}
                isError={errors.email && touched.email}
              />

              <Input
                icon={callPhoneIcon}
                name="phone"
                placeholderLabel="Digite seu telefone"
                type="phone"
                isError={errors.phone && touched.phone} 
              />

              <div className="buttonSend">
                <button type="submit">Enviar</button>
              </div>

              <div style={{width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <span>
                  Dúvidas sobre cuidados?
                  <Link to="/">Clique aqui</Link>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>

    </Container>
  );
}
