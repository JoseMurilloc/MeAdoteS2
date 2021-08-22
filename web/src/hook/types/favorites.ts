export interface FavoritesContextData {
  dogsFavorites: Array<Pet> 
  catsFavorites: Array<Pet>
  loadFavoritesPets(): Promise<void>
}

export type Pet = {
  id?: number;
  name: string;
  age: number;
  gender: string;
  description: string;
  castrated: boolean;
  specie: string;
  photos: Array<string> | null
}

