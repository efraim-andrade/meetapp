import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import MeetupController from './app/controllers/MeetupController';
import SessionController from './app/controllers/SessionController';
import ProviderController from './app/controllers/ProviderController';
import SubscriptionController from './app/controllers/SubscriptionController';

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.get('/meetups/provider', ProviderController.index);
routes.get('/meetups', MeetupController.index);
routes.get('/subscriptions', SubscriptionController.index);

routes.post('/meetups', MeetupController.store);
routes.post('/subscriptions/:id', SubscriptionController.store);
routes.post('/files', upload.single('file'), FileController.store);

routes.put('/users', UserController.update);
routes.put('/meetups/:id', MeetupController.update);

routes.delete('/meetups/:id', MeetupController.delete);

export default routes;
