import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';

import MeAdotaLogo from '../../assets/images/MeAdotaLogo.svg'

export function Header() {
  const history = useHistory()

  return (
    <Container>
      <div className="content">
        <Link to="/">
          <img 
            src={MeAdotaLogo} 
            alt="Logo page"
            className="MeAdotaLogo"
          />
        </Link>

        <nav>
          <ul>
            <li key={Math.random()} className={'activeSection'}>
              Inicial
            </li>
            <li key={Math.random()}>
              Quem somos?
            </li>
            <li key={Math.random()}>
              Ajude
            </li>
            <li key={Math.random()}>
              Adotar
            </li>
          </ul>
        </nav>

        <aside>
          <button 
            id="openButton" 
            onClick={() => history.push('/sign-in')}
          >
            Entrar
          </button> 
          <button 
            id="registerButton"
            onClick={() => history.push('/sign-up')}
          >
            Registre-se
          </button>
        </aside>
      </div>    
    </Container>
  );
};


