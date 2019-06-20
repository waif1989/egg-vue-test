import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/hi', controller.home.index);
  app.get('/', controller.home.server);
  app.get('/client', controller.home.client);
};
