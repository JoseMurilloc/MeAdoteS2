import React from 'react';
import { Container, SideBar, Notifications } from './styles';

import MeAdotaLogoDasboard from '../../assets/images/MeAdotaLogoDasboard.svg'
import homeIcon from '../../assets/icons/basic/home.svg';
import addPetIcon from '../../assets/icons/basic/book.svg';
import vaccineIcon from '../../assets/icons/basic/vaccine.svg';
import notificationIcon from '../../assets/icons/basic/nofification.svg';


const Dashboard: React.FC = ({children}) => {
  return (
    <Container>
      <SideBar>
        <div className="logoContainer">
          <img src={MeAdotaLogoDasboard} alt="logo me adote" />
        </div>

        <ul>
          <li>
            <a href="/" className="active">
              <img src={homeIcon} alt="icon-home" />
              <span>Incio</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={addPetIcon} alt="icon-home" />
              <span>Adiconar pet</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={vaccineIcon} alt="icon-home" />
              <span>Cadastrar vacina</span>
            </a>
          </li>
        </ul>
      </SideBar>
      <Notifications>
        <div className="noficationContainer">
          <img src={notificationIcon} alt="alert-notification" />
        </div>  
        <button>Adicionar anuncio</button>
      </Notifications>
      {children}
    </Container>
  )
}

export default Dashboard;