export interface Pet {
  id: number;
  name: string;
  age: number;
  photo: string;
  gender: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}