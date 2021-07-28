import 'reflect-metadata';
import 'dotenv/config';

import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import morgan from 'morgan';

import routes from './app/routes';
import {multerUserConfig} from './config/upload';
import {multerPetConfig} from './config/multer';

import AppError from './app/errors/AppError'
import './database';
import AppErrorValidate from './app/errors/AppErrorValidate';

const app = express();

app.use(morgan('dev'))
app.use(cors())

app.use(express.json());
app.use('/files', express.static(multerUserConfig.directory))
app.use('/files', express.static(multerPetConfig.directory))
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  if (err instanceof AppErrorValidate) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.errors
    })
  }

  console.error(`🎯 Error message: ${err.message}`)
  console.error(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal error server'
  })
})

app.listen(process.env.PORT, () => {
  const emoji = process.env.MODE === 'test' ? '🌀' : '👋'
  console.log(`${emoji} Server started on port ${process.env.PORT}`);
});
