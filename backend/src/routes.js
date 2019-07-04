import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

export default routes;
