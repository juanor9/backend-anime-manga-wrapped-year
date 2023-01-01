import test from './api/test/index.js';

export default function routes(app) {
  app.use('/api/test', test);
}
