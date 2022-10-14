const passport = require('passport')
const { auth, turn , food, rating} = require('../controllers/index.controller');

module.exports = (router) => {
  router.post('/auth/register', auth.createUser);
  router.post('/auth/login', auth.login);
  router.get('/auth/', passport.authenticate('jwt', {session:false}), auth.isAuth); //TODO configurar passport para que 
  


  router.post('/food', food.createFood);
  router.get('/food', food.listFood);
  router.put('/food/:id', food.updateFood);
  router.delete('/food/:id', food.deleteFood);

  router.post('/rating', rating.postRating);

  return router;
};