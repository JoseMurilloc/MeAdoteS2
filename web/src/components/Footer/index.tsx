import {
  Container,
  FooterContainer,
  SociaisContainer,
  ContactContainer,
} from './styles'
import {AiFillInstagram, AiFillYoutube} from 'react-icons/ai'

import mail from '../../assets/icons/basic/mail_light.svg'
import callPhone from '../../assets/icons/basic/call_phone_light.svg'

export function Footer() {
  return (
    <Container>
      <FooterContainer>
        <SociaisContainer>
          <div>
            <AiFillYoutube size={25} color="#d267a1" />
          </div>
          <div>
            <AiFillInstagram size={25} color="#d267a1" />
          </div>
        </SociaisContainer>
        <ContactContainer>
         <div>
            <span style={{marginBottom: '20px'}}>Contato</span>
            <span style={{marginBottom: '14px'}}>
              <img 
                src={callPhone} 
                alt="Call phone icon" 
              />
              (87) 988422864
            </span>
            <span>
              <img 
                src={mail} 
                alt="Mail icon" 
              />
              Meadotadog@gmail.com
            </span>
         </div>
         <div>
           <button>Login</button>
         </div>
        </ContactContainer>
      </FooterContainer>
    </Container>
  )
}
