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

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    tags: [auth]
 *    summary: Login de usuario.
 *    description: Login de usuario.
 *    requestBody:
 *      description: Email y contraseña de usuario a loguearse
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 description: Email de usuario a loguearse.
 *                 type: email
 *                 example: admin@localhost
 *               password:
 *                 description: Contraseña de usuario a loguearse
 *                 type: string
 *                 example: 1234
 *             required:
 *               - password
 *               - email
 *    responses:
 *      '200':
 *       description: Login de usuario satisfactorio.
 *      '404':
 *       description: Usuario no encontrado (email y/o contraseña incorrecta)
 */