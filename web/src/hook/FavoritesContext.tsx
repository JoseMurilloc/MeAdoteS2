import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { FavoritesContextData, Pet } from "./types/favorites";
import axios from 'axios';

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);


const FavoritesProvider: React.FC = ({children}) => {
  const [dogsFavorites, setDogsFavorites] = useState<Pet[]>([]);
  const [catsFavorites, setCatsFavorites] = useState<Pet[]>([]);

  async function loadFavoritesPets() {
    const [responseDogs, responseCats] = await axios.all([
      await api.get('/pets/favorites', {params: {specie: 'dog'}}),
      await api.get('/pets/favorites', {params: {specie: 'cat'}})
    ])

    setDogsFavorites(responseDogs.data)
    setCatsFavorites(responseCats.data)
  }
  useEffect(() => {
    loadFavoritesPets()
  }, [])

  return (
    <FavoritesContext.Provider value={{
      catsFavorites, dogsFavorites, loadFavoritesPets
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}

function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {  
    throw new Error('useModal must be used within a Authentication')
  }

  return context
}

export { useFavorites, FavoritesProvider }