const { auth } = require('../controllers/index.controller');

module.exports = (router) => {
  router.post('/users/', auth.createUser);

  return router;
};