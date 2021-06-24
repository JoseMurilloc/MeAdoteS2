import React, { useCallback, useEffect, useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { HiUserCircle } from 'react-icons/hi';
import { ImExit } from 'react-icons/im';
import { IoMdHelpCircle } from 'react-icons/io';
import { ActionUser, Container, Content } from './styles';
import { useAuth } from '../../hook/auth';
import { Link } from 'react-router-dom';

import meAdotaLogo from '../../assets/images/MeAdotaLogo.svg'
import userHeartIcon from '../../assets/icons/user/user_heart.svg'
import userIconCircle from '../../assets/icons/user/user_circle_o.svg'
import api from '../../services/api';

const HeaderUserSignIn: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [profileAvatar, setProfileAvatar] = useState('');
  const { user } = useAuth()
  
  const handleToggleMenu = useCallback(() => {
    setToggleMenu(state => !state)
  }, [])
 
  useEffect(() => {
    api.get('/me').then(response => {

      if (!response.data.user.profile_avatar) {
        setProfileAvatar(userIconCircle)
      } else {
        setProfileAvatar(`http://localhost:3333/files/${response.data.user.profile_avatar}`)
      }

    }).catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <Container>
      <Link to="/">
        <img 
          src={meAdotaLogo}
          alt="Logo MeAdota" 
          className="LogoMeAdote"
        />
      </Link>

      <Content>
        <div className="containerFavorite">
          <img src={userHeartIcon} alt="Heart user" />
          <span>Preferidos</span>
        </div>

        <ActionUser>
          <div 
            className="profile" 
            onClick={handleToggleMenu} 
          >
            <div className="containerProfile">
              {user ? (
                <img 
                  src={profileAvatar} 
                  alt="Profile"
                  width="38px"
                  height="38px"
                />
              ): (
                <img src={userIconCircle} alt="User" />
              )}
            </div>
            <span>{user ? user.name : 'Entrar'}</span>
          </div>
          <div 
            className={toggleMenu ? 'menu active': 'menu'}
          >
            <h3>Bem vindo(a)</h3>
            <ul>
              <li> 
                <HiUserCircle color="#D20637" size={20} />  
                <a href="/profile">Minha conta</a>
              </li>
              <li> 
                <BsFillHeartFill color="#D20637" size={20} />
                <a href="/favorites">Meus preferidos</a>
              </li>
              <li> 
                <IoMdHelpCircle color="#D20637" size={20} />
                <a href="/help-me">Ajuda</a>
              </li>
              <li> 
                <ImExit color="#D20637" size={20} />
                <a href="/Authentication/SignUp">Sair</a>
              </li>
            </ul>
          </div>
        </ActionUser>
      </Content>
    </Container>
  )
}

export default HeaderUserSignIn;