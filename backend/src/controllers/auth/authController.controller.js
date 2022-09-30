const  { cashier }  = require ("../../dao/models");

exports.createUser= async (req, res) =>{
  const { user_name, user_password } = req.body;
  console.log(req.body)
  try {
    const newCashier = await cashier.create(
      {
        user_name,
        user_password,    
      },
      {
        fields: ["user_name", "user_password"],
      }
    );
    //console.log(newUser)
    res.json(newCashier);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }  
}

exports.login = async (req, res, next) => {
  console.log(req.body);
  const user = req.body;
  result = await cashier.findOne({
    where: { user_name: user.user_name },
  } );
  console.log(result);
  res.status(200).json({ success: true, status: 200, msg: result })
}

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