import { Router } from 'express';
import { Request, Response } from "express";
import ensureAuthenticated from '@middleware/session/ensureAuthenticated';

import createAdoptServices from '@services/adopt/CreateAdoptServices';
import ListAllServices from '@services/adopt/ListAllServices';
import cancelAdoptServices from '@services/adopt/CancelAdoptServices'

const adoptRoutes = Router();


adoptRoutes.get(
  '/',
  ensureAuthenticated,
  async(request: Request, response: Response) => {
    const { id } = request.user

    const adopts = await ListAllServices.execute({
      idUser: Number(id)
    })

    return response.json(adopts)
  }
)

adoptRoutes.post('/',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    const { idPet, address, dateReceive} = request.body;
    const { id } = request.user

    await createAdoptServices.execute({
      address,
      dateReceive,
      idUser: Number(id),
      idPet
    })

    return response.json({ message: 'Adopt with success' });
  }
);

adoptRoutes.delete(
  '/:idPet',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    const { idPet } = request.params
    const { id: idUser } = request.user

    await cancelAdoptServices.execute({
      idPet: Number(idPet),
      idUser: Number(idUser)
    })

    return response.status(204).json()
  }
)

export default adoptRoutes;
