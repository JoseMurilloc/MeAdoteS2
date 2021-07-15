import { Pet } from "../../hook/types/modal"
import Card from "../Card"
import Pagination from "../Pagination"
import {ListFriends} from './styles'


type CardListProps = {
  pets: Pet[]
  setOffset: React.Dispatch<React.SetStateAction<number>>
  offset: number;
  total: number
}

export function CardList({pets, total, offset, setOffset}: CardListProps) {
  return (
    <>
      <ListFriends>
        {pets && pets.map((pet) => (
          <Card
            key={pet.id}
            pet={pet}
          />
        ))}
      </ListFriends>

      <Pagination 
        limit={30}
        offset={offset}
        setOffset={setOffset}
        total={total}
      />
    </>
  )
}
