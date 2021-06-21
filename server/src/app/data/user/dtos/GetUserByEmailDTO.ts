export interface GetUserByEmailDTO {
  id: number;
  name: string;
  password: string;
  email: string;
  profile_avatar?: string;
}
