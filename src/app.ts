import 'dotenv/config';
import express from 'express';

import logs from '@middlewares/logs';
import routes from './routes';

class App {
  server: any;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    if (process.env.NODE_ENV === 'development') {
      this.server.use(logs);
    }
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
