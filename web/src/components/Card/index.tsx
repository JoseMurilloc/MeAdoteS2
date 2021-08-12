import React from 'react';
import { BiFemaleSign } from 'react-icons/bi';
import { GiMale } from 'react-icons/gi';
import { useModal } from '../../hook/ModalContext';
import { Pet } from '../../hook/types/modal';

import petNotFound from '../../assets/images/cat404.gif';

import { Container } from './styles';

interface CardProps {
  pet: Pet;
  disabled?: boolean;
}

const Card: React.FC<CardProps> = ({
  pet,
  disabled = false
}) => {
  
  const {handleClickAppendAnimal} = useModal()

  return (
    <button
      disabled={disabled}
      onClick={() => handleClickAppendAnimal(pet)} 
      style={{backgroundColor: 'transparent', border: 0}}
    >  
      <Container>
        <img 
          src={pet.photos ? pet.photos[0] : petNotFound} 
          alt="Profile dog"
        />

        <div id="petName">
          <span>{pet.name}</span>
        </div>

        <div className="contentCard">
          <div className="year" style={{
            backgroundColor: pet.gender === 'm' 
            ? '#1C88D6' 
            : '#D20637' 
          }}>
            {pet.age > 1 ? `${pet.age} anos` : `${pet.age} ano`} 
          </div>
        </div>
        <div style={{position: 'absolute', bottom: 7, right: 11}}>
        {pet.gender === 'f' ? (
            <BiFemaleSign color="#BB506A" size={25} />
          ) : (
            <GiMale color="#1C88D6" size={25} />
          )}
        </div>
      </Container>
    </button>
  );
}

export default Card;