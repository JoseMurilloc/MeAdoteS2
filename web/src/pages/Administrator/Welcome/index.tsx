import React from 'react';
import welcomeDashboard from '../../../assets/images/welcomeDashboard.png';
import { Container, WelcomeContainer } from './styles';


export const Welcome: React.FC = () => {
  return (
    <Container>
        <WelcomeContainer>
          <aside>
            <h1>Bom dia, David Gomes</h1>
            <span>Tenha um bom dia de trabalho!</span>  
          </aside>
          <img src={welcomeDashboard} alt="welcome" />
      </WelcomeContainer>
    </Container>
  );
}
