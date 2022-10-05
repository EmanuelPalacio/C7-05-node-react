const { auth } = require('../controllers/index.controller');
const passport = require('passport')



module.exports = (router) => {
  router.post('/auth/register', auth.createUser);
  router.post('/auth/login', auth.login);
  router.get('/auth/', passport.authenticate('jwt', {session:false}), auth.isAuth); //TODO configurar passport para que 
  router.get('/cashier', passport.authenticate('jwt', {session:false}, ))
  

  return router;
};