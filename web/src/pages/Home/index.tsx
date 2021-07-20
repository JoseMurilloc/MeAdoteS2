import {
  Start,
  About,
  Help,
  AdoptionFriend,
  Container
} from './styles'
import { Footer } from '../../components/Footer'
import { IconHome } from '../../utils/icons'
import Card from '../../components/Card';
import { Header } from '../../components/Header';
import data from '../../services/server.json'

import dogHappyImage from '../../assets/images/dogHappy.png'
import teamImage from '../../assets/images/team.png'
import dogImage from '../../assets/images/dog.png'
import { useEffect, useState } from 'react';

export default function Home() {

  const [pets, setPets] = useState<Array<any>>([]);

  useEffect(() => {
    const { animals } = data;
    let petsOnly: any[] = []
    
    animals.forEach((animal, index) => {
      if (index <= 11) {
        petsOnly.push(animal)
      }
    })

    setPets(petsOnly)
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Start>
          <aside>
            <h1>Me Adote</h1>
            <p>
              Adote seu novo melhor amigo aqui e tenha uma vida repleta de amor todos os dias, amor e carinho todos os dias.
            </p>
            <button>
              Adote
              <IconHome.BsFillHeartFill color="#FFF" />
            </button>
          </aside>
          <aside>
            <img src={dogImage} alt="dog"/>
          </aside>
        </Start>
        <About>
          <aside>
            <div className="green">
              <IconHome.SiDatadog size={20} color="#FFF" />
            </div>
            <div className="yellow">
              <IconHome.GiCat size={20} color="#FFF" />
            </div>
            <div>
              <IconHome.BsFillHeartFill size={20} color="#FFF" />
            </div>
            <div className="purple">
              <IconHome.GiDogBowl size={20} color="#FFF" />
            </div>
          </aside>
          <main>
            <section className="content">
                <h1>Me adota!</h1>
                <p>
                  Somos um abrigo bem popular em petrolina por suas ações desde 2015, realizamos busca de animais abandonados pela cidade e cuidamos com muito amor, castrando, realizando os exames necessários para o bem estar do animalzinho e colocando para a adoção em perfeito estado.Conseguindo até hoje realizar todo esse progresso com a ajuda de todos!
                </p>
            </section>
            <section className="team">
              <img src={teamImage} alt=""/>
            </section>
          </main>
        </About>
        <Help>
          <header>
            <img src={dogHappyImage} alt="Dog happy"/>

            <aside>
              <h1>
                😻 Nos ajudem a continuarem nos resgatando 🐕
              </h1>
              <p>Se você doar qualquer valor para a instituição que cuida da gente, vamos continuar sendo resgatados, e eu vou poder ter uma casinha e um dono que me ame pra chamar de meu.</p>
            </aside>
          </header>
          <main>
            <h1>Nossas contas dísponiveis para doações</h1>
            <section>
              <div className="card">
                <img src="https://nubank.com.br/images/nu-icon.png?v=2" alt="Bank"/>
                <span>Agência 0001</span>
                <span>Conta 56485-6</span>
                <span>PIX: 012563</span>
              </div>
              <div className="card">
                <img src="https://nubank.com.br/images/nu-icon.png?v=2" alt="Bank"/>
                <span>Agência 0001</span>
                <span>Conta 56485-6</span>
                <span>PIX: 012563</span>
              </div>
              <div className="card">
                <img src="https://nubank.com.br/images/nu-icon.png?v=2" alt="Bank"/>
                <span>Agência 0001</span>
                <span>Conta 56485-6</span>
                <span>PIX: 012563</span>
              </div>
              <div className="card">
                <img src="https://nubank.com.br/images/nu-icon.png?v=2" alt="Bank"/>
                <span>Agência 0001</span>
                <span>Conta 56485-6</span>
                <span>PIX: 012563</span>
              </div>
            </section>
          </main>
        </Help>        
        <AdoptionFriend>
          <legend>
            Disponíveis para adoção
          </legend>
          <div className="containerViewMore">
            <button className="viewMore">
              Ver mais
            </button>
          </div>
          <aside>
              {pets.map(pet => (
                <div key={pet.id}>
                  <Card
                    disabled={true}
                    pet={pet}
                  />
                </div>
              ))}
          </aside>
        </AdoptionFriend>
        <div style={{marginTop: '100hw',  scrollSnapAlign: 'start'}}>
          <Footer />
        </div>
      </Container>
    </>
  )
}
