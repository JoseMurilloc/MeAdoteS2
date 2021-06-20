import React, { useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import HeaderUserSignIn from '../../components/HeaderUserSignIn';

import CongratulationsBackground from '../../assets/images/CongratulationsBackground.png'
import { Container } from './styles';
import Confetti from 'react-confetti'

const Congratulations: React.FC = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  const [enableConfetti, setEnableConfetti] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setEnableConfetti(false)
    }, 6000)
  }, [])

  return (
    <>
      {enableConfetti && (
        <Confetti
          width={width}
          height={height}
        />
      )}
      <HeaderUserSignIn />
      <Container>
        <div className="content">
          <h1>Parabéns, você acaba de adotar!</h1>
          <p>
            A adoção foi concluída com sucesso, agora seu último passo será ir busca-lo, o formulario preenchido vai ser nossa base de informações sobre o dono que irá no abrigo, leve sua carteira de identidade para confirmar as informações.
          </p>
          <div className="containerLocation">
            <div className="circleGreen">
              <MdLocationOn color="#0D5342" size={20} />
            </div>
            <span>Nossa localização</span>
          </div> 
        </div>

        <div>
          <img 
            src={CongratulationsBackground} 
            alt="CongratulationsBackground"
          />
        </div>
      </Container>
    </>
  )
}

export default Congratulations;