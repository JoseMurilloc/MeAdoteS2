import { Router } from 'express';

import usersRoutes from './user.routes';
import sessionsRoutes from './sessions.routes';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import profilesRoutes from './profile.routes';

const routes = Router();

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/profiles', profilesRoutes)

routes.get('/me', ensureAuthenticated, (request, response) => {
  const { user } = request
  return response.json(user)
})

export default routes;
