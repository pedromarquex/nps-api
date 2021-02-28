import { Router } from 'express';

const routes = Router();

routes.post('/survivors', (request, response) => {
  return response.json({ message: 'ok' });
});


// routes.use(auth);

// authenticated routes go here

export default routes;
