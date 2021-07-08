import React, { useCallback, useEffect, useState } from "react";
import Card from "../../components/Card";
import filterIcon from '../../assets/icons/basic/filter.svg'
import { Footer } from "../../components/Footer";
import api from "../../services/api";
import { 
  Container, 
  ListFriends, 
  ContainerSearchAnimal
} from "./styles";
import data from "../../services/server.json";
import HeaderUserSignIn from "../../components/HeaderUserSignIn";
import { Pet } from "../../hook/types/modal";

const Initial: React.FC = () => {
  const [active, setActive] = useState(true);
  const [filter, setFilter] = useState(false);

  const [dogs, setDogs] = useState<Pet[]>();
  const [cats, setCats] = useState<Pet[]>();

  useEffect(() => {
    api.get('/pets', {
      params: {
        page: 1,
        specie: 'dog'
      }
    }).then(response => {
      setDogs(response.data.pets);
    })
    .catch(err => console.error(err.message))
  }, [])

  const handleChangeFilter = useCallback(() => {
    setFilter((state) => !state);
  }, []);

  async function handleGenderPet(gender: string) {
    try {
      const response = await api.get("/pets", {
        params: {
          gender,
          type: active ? "dog" : "cat",
        },
      });

      if (active) {
        setDogs(response.data);
      } else {
        setCats(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handleChangeGender() {
    setActive((state) => !state);
  }

  return (
    <>
      <HeaderUserSignIn />
      <Container>
        <div className="header">
          <h1>Amores para adoção</h1>
          <p>
            Escolha aqui seu melhor amigo, temos uma listagem de vários
            cachorrinhos e gatinhos para adoção, se pensa em algum tipo
            específico vá em filtro que irá aparecer de acordo com suas
            escolhas.
          </p>
        </div>

        <div className="containerFilter">
          <div>
            <span
              className={active ? "active" : ""}
              onClick={handleChangeGender}
            >
              Cachorro
            </span>
            <span
              className={!active ? "active" : ""}
              onClick={handleChangeGender}
            >
              Gato
            </span>
          </div>
          <button onClick={handleChangeFilter}>
            <img src={filterIcon} alt="Filter icon" />
            <span>Filtrar</span>
          </button>
        </div>
        {filter && (
          <ContainerSearchAnimal>
            <select
              id="sexy"
              onChange={(e) => handleGenderPet(e.target.value)}
            >
              <option value="" disabled selected>
                Sexo
              </option>
              <option value="m">Masculino</option>
              <option value="f">Feminino</option>
            </select>

            <select id="port">
              <option value="" disabled selected>
                Porte
              </option>
              <option value="small">Pequeno</option>
              <option value="medium">Medio</option>
              <option value="large">Grande</option>
            </select>

            <select id="age">
              <option value="" disabled selected>
                Idade
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>

            <select id="need-specials">
              <option value="" disabled selected>
                Necessidades especiais
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </ContainerSearchAnimal>
        )}

        <ListFriends>
          {active
            ? dogs?.map((animal) => (
                <Card
                  key={animal.id}
                  pet={animal}
                />
              ))
            : cats?.map((animal) => (
                <Card
                  pet={animal}
                />
              ))}
        </ListFriends>
      </Container>
      <Footer />
    </>
  );
};

export default Initial;
