import HeaderUserSignIn from "../../components/HeaderUserSignIn";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Input from '../../components/Input'
import { Form, Formik, FormikHelpers } from "formik";
import { Address, AdoptSchema, PetSelectedToAdopt } from "./types";
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

import phoneIcon from '../../assets/icons/basic/call_phone.svg'
import mailIcon from '../../assets/icons/basic/mail.svg'
import petNotImageUpload from '../../assets/images/petNotFound.png'
import { FormValues } from './types'
import { useCallback } from "react";
import { useToast } from "../../hook/ToastContext";


export default function Adopt() {
  const params = useParams()
  const { error, success } = useToast()
  const history = useHistory()


  const [dogFavorite, setDogFavorite] = useState<PetSelectedToAdopt>();
  const [address, setAddress] = useState<Address>({} as Address);

  const initialValuesAddress: FormValues = {
    address: {
      id: address.id,
      state: address.state,
      city: address.city,
      district: address.district,
      street: address.street,
      number: address.number,
      cep: '00000-000'
    },
    date: new Date()
  };

  
  useEffect(() => {
    const { id } = params as { id: number }
    
    try {
      loadPetAdopt()
    } catch(err) {
      console.error(err.message)
    }

    async function loadPetAdopt() {
      const response = await api.get<PetSelectedToAdopt>(`/pets/${id}`)

      if (response.data.photos.length === 0) {
        setDogFavorite({...response.data, photos: [
          petNotImageUpload,
          petNotImageUpload,
          petNotImageUpload,
          petNotImageUpload,
        ]})
      } else {
        setDogFavorite(response.data)
      }
    }

  }, [params])

  useEffect(() => {
    try {
      loadAddress()
    } catch(err) {
      console.error(err.message)
    }
    
    async function loadAddress() {
      const response = await api.get('/addresses')
      setAddress(response.data)
    }
  }, [])


  const handleSubmitFormAdopt = useCallback(async (values: FormValues, actions: FormikHelpers<FormValues>) => {

    const data = {
      dateReceive: new Date(values.date),
      idPet: dogFavorite?.id,
      address: values.address
    }

    try {
      await api.post('/adopts', data)

      success('Ado????o completada com sucesso ????')
      
      history.push('/congratulations')

    } catch(err) {
      error(err.message)
    }
  }, [dogFavorite?.id, error, success, history])

  return (
    <>
      <HeaderUserSignIn />
      <Container>
        <FormContainer>
          <Formik
            enableReinitialize={true} 
            initialValues={initialValuesAddress}
            validationSchema={AdoptSchema}
            onSubmit={(values, actions) => {
              handleSubmitFormAdopt(values, actions);
            }}
          >
             {({ errors, touched, values }) => (

              <Form>
                <h1>Digite o endere??o da nova casa da {dogFavorite?.name}</h1>
                <p>Informe logo abaixo seu endere??o.</p>
                <div className="containerInputs">
                  <Input 
                    name="cep"
                    placeholderLabel="CEP"
                    value={values.address.cep}
                  />

                  <Input 
                    name="street"
                    placeholderLabel="Rua"
                    spellCheck={false}
                    value={values.address.street}
                  />

                  <Input 
                    name="city"
                    placeholderLabel="Cidade"
                    value={values.address.city}
                  />

                  <Input 
                    name="number"
                    placeholderLabel="Numero"
                    value={values.address.number}
                  />

                  <Input 
                    name="state"
                    placeholderLabel="Estado"
                    value={values.address.state}
                  />
                </div>
                
                <div className="InformDayAndHour">
                  <h2>Informe o dia e hora da busca</h2>
                  <div className="inputsHorizontalFlex">
                    <Input
                      name="date"
                      type="datetime-local"
                      placeholderLabel="01/01/2015"
                      value={String(values.date)}
                    />
                  </div>
                </div>
                <button className="adoptButton" type="submit">
                  Adotar
                </button>
              </Form>
            )}
          </Formik>
        

        <div className="portfolioVaccineContainer">
          <h2>Carteira de vacina????o</h2>
          <PortfolioPetVaccine>
            <aside className="c-red">
              <span>Nobivac DPHPPi+L 1?? dose</span>
              <span className="status">Realizada</span>
            </aside>

            <aside className="c-red">
              <span>Nobivac DPHPPi+L 2?? dose</span>
              <span className="status">Realizada</span>
            </aside>

            <aside className="c-red">
              <span>Nobivac DPHPPi+L 3?? dose</span>
              <span className="status">Realizada</span>
            </aside>

            <aside>
              <span>Castra????o</span>
              <span>Aguardando idade</span>
            </aside>
          </PortfolioPetVaccine>
        </div>

        <div className="noticeContainer">
          <img src={alarmIcon} alt="Alarm Icon" />
          <span>
            Carteira de vacina????o fisica ser?? entregue no dia da busca
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
              <h3>Cart??o de ado????o</h3>
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
                    {dogFavorite?.castrated ? 'Castrada' : 'N??o castrada'}
                  </div>
                  <div className="card card-vaccinated">Vacianada</div>
                  <div className="card card-gender">
                    {dogFavorite?.gender === 'f' ? 'Fem??a' : 'Macho'}
                  </div>
                  <div className="card card-age">2 meses</div>
                </div>

                <div className="behavior">
                  <h3>Comportamento</h3>
                  <span>Carinhosa, convive com catos e crian??as</span>
                </div>
              </div>
            </div>
          </CardAdopt>
          <div className="noticeContainer">
            <img src={alarmIcon} alt="Alarm Icon" />
            <span>
              Vacinas b??sicas garantidas e castra????o!
            </span>
          </div>
        </Content>

      </Container>
    </>
  );
}
