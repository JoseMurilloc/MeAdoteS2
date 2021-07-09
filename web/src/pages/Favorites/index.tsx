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
                      "https://images.unsplash.com/photo-1568307970720-a8c50b644a7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NhcmVkJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                      "https://images.unsplash.com/photo-1568307970720-a8c50b644a7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NhcmVkJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                      "https://images.unsplash.com/photo-1568307970720-a8c50b644a7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NhcmVkJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                      "https://images.unsplash.com/photo-1568307970720-a8c50b644a7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NhcmVkJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
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
                      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
                      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
                      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
                      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
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

