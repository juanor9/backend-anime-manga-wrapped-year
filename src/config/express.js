import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

export default function configExpress(app) {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
}
