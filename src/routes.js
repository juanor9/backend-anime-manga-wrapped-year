import test from './api/test/index';

function routes(app) {
  app.use('/api/test', test);
}

export default routes;
