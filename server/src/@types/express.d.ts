 declare namespace Express {
  export interface Request {
    user: {
      id: string;
      name: string;
      profile_avatar?: string;
    }
  }
}
