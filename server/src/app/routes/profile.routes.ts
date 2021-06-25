import { Request, Response, Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { UpdateProfileServices } from '../services/user/UpdateProfileServices';

const profilesRoutes = Router();

const updateProfile = new UpdateProfileServices()

profilesRoutes.put(
  '/',
  ensureAuthenticated,
  async (request, response) => {
    const { user: { id } } = request
    const {
      name, cpf, email, contact_whatsapp
    } = request.body;

    await updateProfile.execute({ user: {
      name, cpf, email, contact_whatsapp, idUser: id
    }})

    return response
      .status(201)
      .json({ message: 'Profile create with success'});
  }
);

export default profilesRoutes;
