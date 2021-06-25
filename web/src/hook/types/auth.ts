export interface User {
  id: number | string;
  name: string;
  profile_avatar?: string;
}

export const key_auth = {
  KEY_TOKEN: '@MeAdotes2:token',
  KEY_USER: '@MeAdotes2:user'
}

 
export interface AuthState {
  token: string;
  user: User;
}

interface Credentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: User;
  authentication: boolean;

  sigIn(credentials: Credentials): Promise<void>;
  sigOut(): void;
  updatedAvatar(user: User): void;
}
