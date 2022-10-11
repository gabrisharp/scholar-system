import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import homeRoute from './routes/homeRoute';
import userRoute from './routes/userRoute';
import tokenRoute from './routes/tokenRoute';
import studentRoute from './routes/studentRoute';
import photoRoute from './routes/photoRoute';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoute);
    this.app.use('/tokens/', tokenRoute);
    this.app.use('/students/', studentRoute);
    this.app.use('/photos/', photoRoute);
  }
}

export default new App().app;
