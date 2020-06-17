import { Router } from 'express';

const routes = Router();

routes.get('/', (resquest, response) =>
  response.json({
    message: 'rodou mesmo',
  }),
);

export default routes;
