export type Adopts = Array<{ 
  name: string,
  age: number,
  gender: string,
  description: string,
  receive: boolean,
  date_receive: Date,
  dateReceiveFormatted?: Date;
  filename?: string
}>

export type Adopt = {
  name: string,
  age: number,
  gender: string,
  description: string,
  receive: boolean,
  date_receive: Date,
  dateReceiveFormatted?: Date;
  filename?: string
}
