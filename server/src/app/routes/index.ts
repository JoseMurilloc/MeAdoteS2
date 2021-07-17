import { Router } from 'express';

import usersRoutes from './user.routes';
import sessionsRoutes from './sessions.routes';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import profilesRoutes from './profile.routes';
import petRoutes from './pet.routes';
import adoptRoutes from './adopt.routes';
import addressRoutes from './address.routes';

const routes = Router();

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/profiles', profilesRoutes)
routes.use('/pets', petRoutes)
routes.use('/adopts', adoptRoutes)
routes.use('/addresses', addressRoutes)

routes.get('/me', ensureAuthenticated, (request, response) => {
  const { user } = request
  return response.json(user)
})

export default routes;
