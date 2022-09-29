<<<<<<< HEAD
const { createUser } = require('../controllers/orderController.controller');


module.exports = (router) => {
    router.get('/api/users/', createUser);

    return router;
=======
const { auth } = require('../controllers/index.controller');

module.exports = (router) => {
  router.post('/users/', auth.createUser);

  return router;
>>>>>>> capas
};