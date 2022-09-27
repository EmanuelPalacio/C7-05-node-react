const { createUser } = require('../controllers/orderController.controller');

module.exports = (router) => {
  router.get('/users/', createUser);

  return router;
};