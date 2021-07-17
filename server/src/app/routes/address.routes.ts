import { Router } from 'express';
import { Request, Response } from "express";
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import ListAddressServices from '../services/address/ListAddressServices';
import CreateAddressServices from '../services/address/CreateAddressServices'

const addressRoutes = Router();


/**
 * Implementation Not yet terminated
 */
addressRoutes.post(
  '/',
  ensureAuthenticated,
  async(request: Request, response: Response) => {
    const {state, city, district, street, number} = request.body
    const {id} = request.user

    await CreateAddressServices.execute({
      state, city, district, street, number
    })

    return response.json()
  })

addressRoutes.get('/',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    const { id } = request.user

    const address = await ListAddressServices
      .execute({ idUser: Number(id)})

    return response.json({ address });
  }
);

export default addressRoutes;
