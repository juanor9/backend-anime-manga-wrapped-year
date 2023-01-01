import * as dotenv from 'dotenv';
import express from 'express';
import configExpress from './config/express.js';
import routes from './routes.js';

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();

configExpress(app);
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

