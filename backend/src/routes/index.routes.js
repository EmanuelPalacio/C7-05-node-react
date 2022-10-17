const passport = require('passport');
const { auth, turn, food, rating } = require('../controllers/index.controller');

module.exports = (router) => {
  router.post('/auth/register', auth.createUser);
  router.post('/auth/login', auth.login);
  router.get(
    '/auth/',
    passport.authenticate('jwt', { session: false }),
    auth.isAuth,
  ); //TODO configurar passport para que

  router.post('/turns', turn.createTurn);
  router.put('/turns/:id', turn.updateTurn);
  router.get('/turns/', turn.getTurns);
  router.get('/turns/:id', turn.getTurn);
  router.post('/turns/:id', turn.registerNotificationId);
  router.delete('/turns/:id', turn.deleteTurn);

  router.get(
    '/cashier',
    passport.authenticate('jwt', { session: false }, auth.login),
  );
  router.get('/cashier/register', auth.createUser);

  router.post('/food', food.createFood);
  router.get('/food', food.listFood);
  router.put('/food/:id', food.updateFood);
  router.delete('/food/:id', food.deleteFood);

  router.post('/rating', rating.postRating);
  router.get('/ratings', rating.getRatings);

  return router;
};
