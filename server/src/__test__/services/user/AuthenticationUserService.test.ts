import 'reflect-metadata';
import axios, { AxiosInstance } from 'axios';
import {AuthenticationUserService} from '@services/user/AuthenticationUserService'
import {CreateUserService} from '@services/user/CreateUserService'
import db from '../../../database'


let authenticationUser: AuthenticationUserService
let createUser: CreateUserService

let api: AxiosInstance

describe('Authentication User service', () => {

  beforeEach(() => {
    authenticationUser = new AuthenticationUserService()
    createUser = new CreateUserService()

    api = axios.create({
      baseURL: 'http://localhost:3333'
    })
  })

  it ('The user must authenticate with a token in return', async () => {
    await createUser.execute({
      contact_whatsapp: '99999999999',
      cpf: '12121121212',
      email: 'john@gmail.com',
      name: 'john doe',
      password: '123456',
    })

    const response = await api.post('/sessions', {
      email: 'john@gmail.com',
      password: '123456'
    })

    console.log(response.data)

    expect(response.data).toHaveProperty('token')
    db.any('DELETE FROM users WHERE cpf=12121121212')
  })
})
