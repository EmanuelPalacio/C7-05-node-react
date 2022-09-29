const { Turn } = require('../services/index.service');
const turnService = new Turn();
exports.createUser = async(req, res, next) => {
  try {
    let orderRetrieved = await turnService.createUser();

    let { msg, status } = orderRetrieved;

    res.status(status).json(orderRetrieved);
  } catch (error) {
    console.log(error);
  }
};