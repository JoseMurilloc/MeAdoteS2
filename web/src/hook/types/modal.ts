import React from "react";

export interface ModalContextData {
  DetailsAnimalModal?: React.FC<DetailsAnimalModalProps>;
  handleClickAppendAnimal: (animal: Animal) => void;
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
  animal: Animal;
  onOpen: boolean;
  onClose: () => void;
}