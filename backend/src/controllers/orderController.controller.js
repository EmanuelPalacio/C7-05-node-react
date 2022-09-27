const UserService = require('../services/turnService.service');
const userService = new UserService();
exports.createUser = async(req, res, next) => {
  try {
    let orderRetrieved = await userService.createUser();

    let { msg, status } = orderRetrieved;

    res.status(status).json(orderRetrieved);
  } catch (error) {
    console.log(error);
  }
};