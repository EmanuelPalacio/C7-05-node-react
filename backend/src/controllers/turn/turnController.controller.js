const { Turn } = require('../../services/index.service.js');
const turnService = new Turn();
exports.createTurn = async(req, res) => {
  const user = req.body;

  try {
    const userToCreate = await cashierService.createUser(user);
    const { status } = userToCreate;
    res.status(status).json({
      userToCreate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.login = async(req, res, next) => {
  const user = req.body;
  try {
    const userRetrieved = await cashierService.findUserById(user);

    const { status } = userRetrieved;
    res.status(status).json(userRetrieved);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};