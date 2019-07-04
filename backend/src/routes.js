import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

routes.post('/users', UserController.store);

export default routes;
