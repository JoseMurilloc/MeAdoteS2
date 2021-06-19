export interface CreateUserDTO {
  name: string;
  cpf: string;
  email: string;
  password: string;
  profile_avatar?: string;
  gender: string;
  number?: string;
}
