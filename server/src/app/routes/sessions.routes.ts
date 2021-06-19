import { Router } from 'express';
import { AuthenticationUserService } from '../services/user/AuthenticationUserService'

const sessionsRoutes = Router();
const authenticationUser = new AuthenticationUserService()

sessionsRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const { user, token } =
    await authenticationUser.execute({user: { email, password}})

  return response.json({user, token});
});

export default sessionsRoutes;
