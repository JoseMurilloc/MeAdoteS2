import { ButtonHTMLAttributes, useEffect, useState } from "react"
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
import api from "../../services/api"

import {FavoriteButton, FavoriteButtonConfirm} from './styles'

type ButtonFavoriteProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  idPet: number;
}

export function ButtonFavorite(
  { idPet }: ButtonFavoriteProps
) {

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
      api.get(`/pets/favorites/${idPet}`)
        .then((response => setFavorite(response.data.isFavorite)))
      .catch(err => console.error(err))
  }, [idPet])

  async function handleIsFavorite() {
    await api.post(`/pets/${idPet}/favorites`)
    setFavorite(state => !state)
  }


  if (favorite) {
    return (
      <FavoriteButtonConfirm onClick={handleIsFavorite}>
        Preferido
        <BsFillHeartFill color="#FFFFFF" size={13}/>
     </FavoriteButtonConfirm>
    )
  }

  return (
    <FavoriteButton onClick={handleIsFavorite}>
      Preferir
      <BsHeart color="#BB506A" size={13}/>
    </FavoriteButton>
  )
}
