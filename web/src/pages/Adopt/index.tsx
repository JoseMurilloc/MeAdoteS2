import HeaderUserSignIn from "../../components/HeaderUserSignIn";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from '../../components/Input'
import { Form, Formik } from "formik";
import { ForgotPasswordSchema, initialValues } from "./types";
import { Container, FormContainer, PortfolioPetVaccine } from "./styles";

import alarmIcon from '../../assets/icons/basic/alarm.svg'

export default function Adopt() {
  const params = useParams()
  
  useEffect(() => {
    console.log(params)
  }, [params])

  return (
    <>
      <HeaderUserSignIn />
      <Container>
        <FormContainer>
        <Formik
            initialValues={initialValues}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values, actions) => {
              console.log(values);
            }}
          >
            <Form>
              <h1>Digite o endereço da nova casa da milu</h1>
              <p>Informe logo abaixo seu endereço.</p>
              <div className="containerInputs">
                <Input 
                  name="cep"
                  placeholderLabel="CEP"
                />

                <Input 
                  name="street"
                  placeholderLabel="Rua"
                />

                <Input 
                  name="city"
                  placeholderLabel="Cidade"
                />

                <Input 
                  name="number"
                  placeholderLabel="Numero"
                />

                <Input 
                  name="state"
                  placeholderLabel="Estado"
                />
              </div>
              
              <div className="InformDayAndHour">
                <h2>Informe o dia e hora da busca</h2>
                <div className="inputsHorizontalFlex">
                  <Input
                    name="Date"
                    type="date"
                    placeholderLabel="01/01/2015"
                  />

                  <Input
                    name="time"
                    type="time"
                    placeholderLabel="Hour and minutes"
                  />
                </div>
              </div>
            </Form>
          </Formik>
        

        <div className="portfolioVaccineContainer">
          <h2>Carteira de vacinação</h2>
          <PortfolioPetVaccine>
            <aside className="c-red">
              <span>Nobivac DPHPPi+L 1º dose</span>
              <span className="status">Realizada</span>
            </aside>

            <aside className="c-red">
              <span>Nobivac DPHPPi+L 2º dose</span>
              <span className="status">Realizada</span>
            </aside>

            <aside className="c-red">
              <span>Nobivac DPHPPi+L 3º dose</span>
              <span className="status">Realizada</span>
            </aside>

            <aside>
              <span>Castração</span>
              <span>Aguardando idade</span>
            </aside>
          </PortfolioPetVaccine>
        </div>

        <div className="noticeContainer">
          <img src={alarmIcon} alt="Alarm Icon" />
          <span>
            Carteira de vacinação fisica será entregue no dia da busca
          </span>
        </div>

        </FormContainer>

      </Container>
    </>
  );
}
