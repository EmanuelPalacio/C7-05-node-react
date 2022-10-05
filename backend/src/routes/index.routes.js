const { auth, turn , food} = require('../controllers/index.controller');

module.exports = (router) => {
  router.post('/auth/register', auth.createUser);
  router.post('/auth/login', auth.login);
  router.get('/auth/', auth.isAuth);


  router.post('/food', food.createFood);
  router.get('/food', food.listFood);
  router.put('/food/:id', food.updateFood);
  router.delete('/food/:id', food.deleteFood);

  return router;
};