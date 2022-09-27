const { createUser } = require('../services/turnService.service');

exports.createUser = async(req, res, next) => {
    try {
        let orderRetrieved = await createUser();

        let { msg, status } = orderRetrieved;

        res.status(status).json(msg);
    } catch (error) {
        console.log(error);
    }
};