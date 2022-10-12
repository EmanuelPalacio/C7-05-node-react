const { Cashier } = require('../../services/index.service.js');
const cashierService = new Cashier();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/globals');

exports.createUser = async (req, res) => {
  const userBody = req.body;

  try {
    const userRetrieved = await cashierService.findUser(userBody);
    console.log(userRetrieved);
    if (userRetrieved.status !== 404) throw (new Error().code = 409);
    const userToCreate = await cashierService.createUser(userBody);
    const { status, user } = userToCreate;
    const { id, user_name } = user;
    res.status(status).json({
      user: {
        id,
        user_name,
      },
    });
  } catch (error) {
    if (error === 409) {
      res.status(error).json({
        message: 'Ya existe ese usuario',
      });
    } else {
      res.status(500).json({
        message: error.message,
      });
    }
  }
};

exports.login = async (req, res, next) => {
  const user = req.body;
  try {
    const userRetrieved = await cashierService.findUser(user);
    if (userRetrieved.status === 404)
      throw (new Error('Usuario o contraseña incorrectos').code = 401);
    let response = {
      jwt: jwt.sign({ id: userRetrieved.userRetrieved.id }, JWT_SECRET),
      user: {
        user_name: userRetrieved.userRetrieved.user_name,
        id: userRetrieved.userRetrieved.id,
      },
    };

    const { status } = userRetrieved;
    res.status(status).json(response);
  } catch (error) {
    console.log(error);
    if (error === 401) {
      res.status(error).json({
        error: error.message,
      });
    } else {
      console.log(error);
      res.status(500).json({
        error: error.message,
      });
    }
  }
};

exports.isAuth = async (req, res, next) => {
  res.status(200).json({
    msg: 'Estás loggeado!',
  });
};

/*const cashierService = new Cashier();
exports.createUser = async(req, res, next) => {
  console.log(req.body);

  try {
    let user;
    let result;
    user = {
        user_name: 'Juan',
        user_password: '1234',
      } //req.body;

    result = await cashierService.createUser(user);
    res.status(200).json({ success: true, status: 200, msg: result });

    return result;
  } catch (error) {
    console.log(error);
  }
};

exports.login = async(req, res, next) => {


  console.log(req.body);
  const loginCredentials = req.body;
  result = await cashierService.findUser(loginCredentials);
  console.log(result);
  res.status(200).json({ success: true, status: 200, msg: result })
}*/
