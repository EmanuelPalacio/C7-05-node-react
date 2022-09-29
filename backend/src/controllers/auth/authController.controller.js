const { Cashier } = require('../../services/index.service');
const cashierService = new Cashier();
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
}