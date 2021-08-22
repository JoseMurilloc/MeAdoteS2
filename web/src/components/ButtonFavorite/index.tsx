import { ButtonHTMLAttributes, useEffect, useState } from "react"
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
import { useFavorites } from "../../hook/FavoritesContext"
import api from "../../services/api"

import {FavoriteButton, FavoriteButtonConfirm} from './styles'

type ButtonFavoriteProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  idPet: number;
}

export function ButtonFavorite(
  { idPet }: ButtonFavoriteProps
) {

  const [favorite, setFavorite] = useState(false);
  const { loadFavoritesPets } = useFavorites()

  useEffect(() => {
      api.get(`/pets/favorites/${idPet}`)
        .then((response => setFavorite(response.data.isFavorite)))
      .catch(err => console.error(err))
  }, [idPet])

  async function handleIsFavorite() {
    if (!favorite) {
      await api.post(`/pets/${idPet}/favorites`)
    } else if (favorite) {
      await api.delete(`/pets/favorites/${idPet}`)
    }
    setFavorite(state => !state)
    await loadFavoritesPets()
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
