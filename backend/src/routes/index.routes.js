const { auth } = require('../controllers/index.controller');



module.exports = (router) => {
 router.post('/auth/register', auth.createUser);
  //router.post('/auth/login', auth.login);

  

  return router;
};