import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Header } from './styles';

import dogCity from '../../assets/images/dogCity.png';
import dogRegister from '../../assets/images/dogRegister.png';

export const Authentication: React.FC = ({children}) => {

  const history = useHistory();

  const {pathname} = history.location;

  return (
    <Container>
      {pathname === '/sign-up' ? (
        <img 
          src={dogRegister} 
          alt="Dog city"
          width="250px"
          height="100vh"
        />
      ): (
        <img 
          src={dogCity} 
          alt="Dog city"
          width="250px"
          height="100vh"
        />
      )}

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

