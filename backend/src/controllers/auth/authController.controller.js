const { Cashier } = require('../../services/index.service');
const cashierService = new Cashier();
exports.createUser = async(req, res, next) => {
  console.log(req.body);

  try {
    let user;
    let result;
    user = req.body;
    if (JSON.stringify(user) === '{}') {
      result = 'No existen datos';
      return res.status(203).json({ success: false, status: 203, msg: result });
    }

    result = await cashierService.createUser(user);
    res.status(200).json({ success: true, status: 200, msg: result });

    return result;
  } catch (error) {
    console.log(error);
  }
};