<<<<<<< HEAD
const { createUser } = require('../services/turnService.service');

exports.createUser = async(req, res, next) => {
    try {
        let orderRetrieved = await createUser();

        let { msg, status } = orderRetrieved;

        res.status(status).json(msg);
    } catch (error) {
        console.log(error);
    }
=======
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
>>>>>>> capas
};