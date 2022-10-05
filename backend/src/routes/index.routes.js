const { auth, turn } = require('../controllers/index.controller');

module.exports = (router) => {
  router.post('/auth/register', auth.createUser);
  router.post('/auth/login', auth.login);
  router.get('/auth/', auth.isAuth);

  router.post('/turns', turn.createTurn);
  router.put('/turns/:id', turn.updateTurn);
  router.get('/turns/', turn.getTurns);
  router.get('/turns/:id', turn.getTurn);
  router.delete('/turns/:id', turn.deleteTurn);

  return router;
};