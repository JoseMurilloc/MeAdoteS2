import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Footer } from '../../components/Footer';
import HeaderUserSignIn from '../../components/HeaderUserSignIn'
import { useFavorites } from '../../hook/FavoritesContext';
import { Pet } from '../../hook/types/modal';
import {Container, ListPets} from './styles'

export function Favorites() {
  const [active, setActive] = useState(false);
  const { dogsFavorites, catsFavorites } = useFavorites();

  function handleChangeSpecie() {
    setActive(state => !state)
  }

  return (
    <>
      <HeaderUserSignIn />
      <Container>
        <div className="header">
          <h1>Seus preferidos</h1>
          <span>
            Seus animais de mais interesses estão salvos nessa pagina
          </span>
        </div> 

        <div className="containerFilter">
          <div>
            <span
              className={!active ? "active" : ""}
              onClick={handleChangeSpecie}
            >
              Cachorro
            </span>
            <span
              className={active ? "active" : ""}
              onClick={handleChangeSpecie}
            >
              Gato
            </span>
          </div>

          <ListPets>
            {!active ? (
            <>
              {dogsFavorites.map((dog: Pet) => (
                <Card
                  key={dog.id}
                  pet={{
                    age: dog.age,
                    castrated: dog.castrated,
                    description: dog.description,
                    gender: dog.gender,
                    name: dog.name,
                    photos: dog.photos,
                    specie: 'dog',
                    id: dog.id
                  }}
                />
              ))}
            </>
 
            ) : (
              <>
              {catsFavorites.map((cat: Pet) => (
                <Card
                  key={cat.id}
                  pet={{
                    age: cat.age,
                    castrated: cat.castrated,
                    description: cat.description,
                    gender: cat.gender,
                    name: cat.name,
                    photos: cat.photos,
                    specie: 'cat',
                    id: cat.id
                  }}
                />
              ))}
              </>
            )}
         </ListPets>
        </div>
      </Container>
      <Footer />
    </>
  )
}

