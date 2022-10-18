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
 * /api/auth/register:
 *  post:
 *    tags: [Auth]
 *    summary: Registro de usuario.
 *    description: Registro de usuario.
 *    requestBody:
 *      description: Nombre de usuario y contraseña de usuario a registrarse
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 description: Nombre de usuario a loguearse.
 *                 type: string
 *                 example: admin
 *               user_password:
 *                 description: Contraseña de usuario a loguearse
 *                 type: string
 *                 example: 1234
 *             required:
 *               - user_name
 *               - user_password
 *    responses:
 *      '200':
 *       description: Registro de usuario satisfactorio.
 *      '404':
 *       description: Usuario no encontrado (nombre de usuario y/o contraseña incorrecta)
 */


/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    tags: [Auth]
 *    summary: Login de usuario.
 *    description: Login de usuario.
 *    requestBody:
 *      description: Nombre de usuario y contraseña de usuario a loguearse
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 description: Nombre de usuario a loguearse.
 *                 type: string
 *                 example: admin
 *               user_password:
 *                 description: Contraseña de usuario a loguearse
 *                 type: string
 *                 example: 1234
 *             required:
 *               - user_name
 *               - user_password
 *    responses:
 *      '200':
 *       description: Login de usuario satisfactorio.
 *      '404':
 *       description: Usuario no encontrado (usuario y/o contraseña incorrecta)
 */

/**
 * @swagger
 * /api/auth:
 *   get:
 *     summary: logged user
 *     tags: [Users]
 *     description: show data user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Success Login
 */

/**
 * @swagger
 * /api/food:
 *  post:
 *    tags: [Food]
 *    summary: new food.
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - option_name
 *              - estimated_time
 *            properties:
 *               option_name:
 *                 description:  nombre de la opcion de menu
 *                 type: string
 *               estimated_time:
 *                 description: timepo eestimado de espera
 *                 type: integer
 *            example:
 *              option_name: Desayuno
 *              estimated_time: 15
 *    responses:
 *      201:
 *       description: Food create
 */

/**
 * @swagger
 * /api/food:
 *  get:
 *    tags: [Food]
 *    summary: food
 *    description: Lists de opciones de menu
 *    parameters:
 *       - in: query
 *         name: index
 *         required: true
 *         description: Index del user logged.
 *         schema:
 *           type: integer
 *           example: -1
 *    responses:
 *       200:
 *         description: List of products
 */


/**
 * @swagger
 * /api/food/{id}:
 *  put:
 *    summary: Actualizacion de registro
 *    tags: [Food]
 *    description : modificar opcion de menu
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: id de la opcion a actualizar
 *        schema:
 *          type: string
 *          example: 1
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - option_name
 *                - estimated_time
 *              properties:
 *                option_name:
 *                  type: string
 *                  description: Nombre de la opcion de menu
 *                estimated_time:
 *                  type: integer
 *                  description: Tiempo estimado de espera
 *              example:
 *                option_name: almuerzo
 *                estimated_time: 20
 *    responses:
 *       201:
 *        description: Food updated
 */

/**
 * @swagger
 * /api/food/{id}:
 *  delete:
 *     summary: Eliminar opcion de menu
 *     description: Solo admin pueden eliminar registro
 *     tags: [Food]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 1
 *     responses:
 *       "200":
 *         description: product deleted
 */