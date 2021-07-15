import HeaderUserSignIn from "../../components/HeaderUserSignIn";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from '../../components/Input'
import { Form, Formik } from "formik";
import { ForgotPasswordSchema, initialValues, PetAdopt } from "./types";
import { 
  Content,
  About,
  CardAdopt,
  Container,
  FormContainer,
  PortfolioPetVaccine 
} from "./styles";

import alarmIcon from '../../assets/icons/basic/alarm.svg'
import api from "../../services/api";
import { Pet } from "../../hook/types/modal";

import phoneIcon from '../../assets/icons/basic/call_phone.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import petNotFound from '../../assets/images/petNotFound.png'



export default function Adopt() {
  const params = useParams()

  const [dogFavorite, setDogFavorite] = useState<PetAdopt>();
  
  useEffect(() => {
    const { id } = params as { id: number}
    api.get<PetAdopt>(`/pets/${id}`)
      .then(response => {
        if (response.data.photos.length === 0) {
          setDogFavorite({...response.data, photos: [
            petNotFound,
            petNotFound,
            petNotFound,
            petNotFound,
          ]})
        } else {
          setDogFavorite(response.data)
        }
      })
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
              <h1>Digite o endereço da nova casa da {dogFavorite?.name}</h1>
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
          
        <Content>
          <About>
            <h3>Nossos contatos</h3>
            <p>
              <img src={phoneIcon} alt="Phone" />
              (87) 988465287
            </p>
            <p>
              <img src={mailIcon} alt="GMAIL" />
              meadota@hotmail.com
            </p>
          </About>
          <CardAdopt>
            <div id="title">
              <h3>Cartão de adoção</h3>
            </div>
            <div className="container">
              <div className="photos">
                <div className="inactivePhotos">
                  <img 
                    src={dogFavorite?.photos[0]} 
                    alt="secondary" 
                  />
                  <img 
                    src={dogFavorite?.photos[1]} 
                    alt="secondary" 
                  />
                  <img 
                    src={dogFavorite?.photos[2]} 
                    alt="secondary" 
                  />
                </div>
                <img 
                  src={dogFavorite?.photos[3]} 
                  alt="secondary" 
                />
              </div>
              <div className="content">
                <h3>{dogFavorite?.name}</h3>
                <p>
                  {dogFavorite?.description}
                </p>

                <div className="shortsCards">
                  <div className="card">
                    {dogFavorite?.castrated ? 'Castrada' : 'Não castrada'}
                  </div>
                  <div className="card card-vaccinated">Vacianada</div>
                  <div className="card card-gender">
                    {dogFavorite?.gender === 'f' ? 'Femêa' : 'Macho'}
                  </div>
                  <div className="card card-age">2 meses</div>
                </div>

                <div className="behavior">
                  <h3>Comportamento</h3>
                  <span>Carinhosa, convive com catos e crianças</span>
                </div>
              </div>
            </div>
          </CardAdopt>
          <div className="noticeContainer">
            <img src={alarmIcon} alt="Alarm Icon" />
            <span>
              Vacinas básicas garantidas e castração!
            </span>
          </div>
        </Content>

      </Container>
    </>
  );
}
