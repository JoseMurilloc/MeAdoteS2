import { useState } from 'react';
import Card from '../../components/Card';
import { Footer } from '../../components/Footer';
import HeaderUserSignIn from '../../components/HeaderUserSignIn'
import {Container, ListPets} from './styles'

export function Favorites() {
  const [active, setActive] = useState(false);

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
              className={active ? "active" : ""}
              onClick={handleChangeSpecie}
            >
              Cachorro
            </span>
            <span
              className={!active ? "active" : ""}
              onClick={handleChangeSpecie}
            >
              Gato
            </span>
          </div>

          <ListPets>
            {!active ? (
            <>
              {[0,1,2,4,5,6].map(m => (
                <Card
                  disabled={true}
                  pet={{
                    age:2,
                    castrated:false,
                    description:"",
                    gender: 'f',
                    name: "Pipoca",
                    photos: [
                      "https://i.pinimg.com/564x/ac/03/98/ac03988834695cc2f6eb623a74143355--green-eyes-bengal-cats.jpg",
                      "https://i.pinimg.com/564x/ac/03/98/ac03988834695cc2f6eb623a74143355--green-eyes-bengal-cats.jpg",
                      "https://i.pinimg.com/564x/ac/03/98/ac03988834695cc2f6eb623a74143355--green-eyes-bengal-cats.jpg",
                      "https://i.pinimg.com/564x/ac/03/98/ac03988834695cc2f6eb623a74143355--green-eyes-bengal-cats.jpg"
                    ],
                    specie: 'dog',
                    id:1
                  }}
                />
              ))}
            </>
 
            ) : (
              <>
              {[0,1,2,3,4,5].map(p => (
                <Card
                  disabled={true}
                  pet={{
                    age:2,
                    castrated:false,
                    description:"",
                    gender: 'f',
                    name: "Mia",
                    photos: [
                      "https://images.unsplash.com/photo-1491604612772-6853927639ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
                      "https://images.unsplash.com/photo-1491604612772-6853927639ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
                      "https://images.unsplash.com/photo-1491604612772-6853927639ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
                      "https://images.unsplash.com/photo-1491604612772-6853927639ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    ],
                   specie: 'cat',
                   id:1
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

