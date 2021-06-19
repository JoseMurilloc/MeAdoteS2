import { Router } from 'express';

import usersRoutes from './user.routes';
import sessionsRoutes from './sessions.routes';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)

routes.get('/me', ensureAuthenticated, (request, response) => {
  return response.json({access: true})
})

export default routes;
