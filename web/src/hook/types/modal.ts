import React from "react";

export interface ModalContextData {
  DetailsAnimalModal?: React.FC<DetailsAnimalModalProps>;
  handleClickAppendAnimal: (animal: Pet) => void;
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


export type Animal = {
  id?: number;
  name: string;
  age: number;
  gender: string;
  photo: string;
  images: Array<{
    id: number;
    url: string
  }>
}

export type DetailsAnimalModalProps = {
  pet: Pet;
  onOpen: boolean;
  onClose: () => void;
}