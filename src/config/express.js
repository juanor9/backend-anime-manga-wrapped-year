import express from 'express';
import cors from 'cors';

function configExpress(app) {
  app.use(cors());
  app.use(express.json());
}

export default configExpress;
