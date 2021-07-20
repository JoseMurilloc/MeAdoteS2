import { useEffect, useState } from "react"
import { Container, Wrapper } from './styles'

import calendarImage from '../../assets/icons/basic/calendar.svg'
import contactImage from '../../assets/icons/basic/contactImage.svg'
import emailImage from '../../assets/icons/basic/mail.svg'
import localImage from '../../assets/icons/basic/local.svg'
import api from "../../services/api"
import { useAuth } from "../../hook/auth"
import { Adopt, Adopts } from "./types"
import { parseISO } from "date-fns"

import petNotFound from '../../assets/images/petNotFound.png'


export function CardAdopt() {

  const { authentication } = useAuth()

  const [adoptPets, setAdoptPets] = useState<Adopts>([]);
  const [containsAdopt, setContainsAdopt] = useState(false);

  useEffect(() => {
    
    if (authentication) {
      api.get('/adopts')
        .then(response => {
          const adoptsFormatted = response.data.map((adopt: Adopt) => {
            return {
              ...adopt,
              dateReceiveFormatted: parseISO(String(adopt.date_receive))
            }
          })
          setAdoptPets(adoptsFormatted)          
          setContainsAdopt(response.data.length > 0)
        })
        .catch(err => console.error(err.message))
    }
  }, [authentication])

  return (
    <Wrapper>
    {containsAdopt && (
     adoptPets.map(adopt => (
      <Container>
        <div className="circle-left"></div>
          <main>
      
            <h3>{adopt.name}</h3>
            <div className="cardInfos">
              <div className="card card-gender">
                {adopt.gender === 'f' ? 'Fêmia' : 'Macho'}
              </div>
              <div className="card card-vaccinated">
                Vacinada
              </div>
              <div className="card card-age">
                2 meses
              </div>
              <div className="card card-castrated">
                Castrada
              </div>
            </div>
    
            <div className="wrapperInfoAdopt">
              <div className="infoAdopt infoAdoptStrongInfo">
                <img src={calendarImage} alt="calendar" />
                <span>{adopt.date_receive}</span>
              </div>
    
              <div className="infoAdopt" style={{marginTop: 17}}>
                <img src={contactImage} alt="contactImage"/>
                <span>(87) 988465287</span>
              </div>
    
              <div className="infoAdopt" style={{marginTop: 7}}>
                <img src={emailImage} alt="emailImage" width="19px"/>
                <span>meadota@hotmail.com</span>
              </div>
            </div>
    
          </main>

          <div className="photoPet">
            <div className="box">
              <img src="https://i.ibb.co/whNsqQf/heart.png" alt="Heart" />
              <img src={adopt.filename ? adopt.filename : petNotFound} alt="logo" />
            </div>
          </div>


          <button className="localization">
            <img src={localImage} alt="Localization" />
            <span>Localização</span>
          </button>
        <div className="circle-right"></div>
      </Container>
      ))
    ) }
    </Wrapper>
  )
}