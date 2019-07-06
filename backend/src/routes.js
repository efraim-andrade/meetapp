import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import MeetupController from './app/controllers/MeetupController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.get('/meetups/provider', ProviderController.index);

routes.post('/meetups', MeetupController.store);
routes.post('/files', upload.single('file'), FileController.store);

routes.put('/users', UserController.update);
routes.put('/meetups/:id', MeetupController.update);

routes.delete('/meetups/:id', MeetupController.delete);

export default routes;
