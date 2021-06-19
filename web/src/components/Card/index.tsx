import React from 'react';
import { BiFemaleSign } from 'react-icons/bi';
import { GiMale } from 'react-icons/gi';
import { useModal } from '../../hook/ModalContext';
import { Animal } from '../../hook/types/modal';

import { Container } from './styles';

interface CardProps {
  animal: Animal;
}

const Card: React.FC<CardProps> = ({
  animal
}) => {
  
  const {handleClickAppendAnimal} = useModal()

  return (
    <button 
      onClick={() => handleClickAppendAnimal(animal)} 
      style={{backgroundColor: 'transparent', border: 0}}
    >  
      <Container>
        <img 
          src={animal.photo} 
          alt="Profile dog"
        />
        <span>{animal.name}</span>

        <div className="contentCard">
          <div className="year" style={{
            backgroundColor: animal.gender === 'm' 
            ? '#1C88D6' 
            : '#D20637' 
          }}>
            {animal.age > 1 ? `${animal.age} anos` : `${animal.age} ano`} 
          </div>
        </div>
        <div style={{position: 'absolute', bottom: 7, right: 11}}>
        {animal.gender === 'f' ? (
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