import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header } from './styles';

import dogCity from '../../assets/images/dogCity.png';

export const Authentication: React.FC = ({children}) => {
  return (
    <Container>
      <img 
        src={dogCity} 
        alt="Dog city"
        width="250px"
        height="100vh"
      />

      <div style={{width: '100%'}}>
        <Header>

          <aside>
            <Link to="/sign-in" className="sign-in">
              Entrar
            </Link>
            <Link to="sign-up" className="sign-up">
              Cadastrar
            </Link>
          </aside>
        </Header>
          {children}
      </div>  
    </Container>
  );
};
