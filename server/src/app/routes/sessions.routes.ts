import { Router } from 'express';
import { Request, Response } from "express";
import { AuthenticationUserService } from '../services/user/AuthenticationUserService'
import credentialsSessionValidate from '../middlewares/user/credentialsSessionValidate'

const sessionsRoutes = Router();
const authenticationUser = new AuthenticationUserService()

sessionsRoutes.post('/',
  credentialsSessionValidate,
  async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const { user, token } =
      await authenticationUser.execute({user: { email, password}})

    return response.json({user, token});
  }
);

export default sessionsRoutes;
