
/*module.exports = class {
  async createUser(user) {

    console.log(user);
    Cashier.create(user)
  }
  async findUser(user) {
    
    let usuario = await Cashier.findOne({
      where: { user_name: user.user_name },
    } 
    )
    if (usuario && user.user_password === usuario.dataValues.user_password){
      return true;
    }else{
      return false;
    }
  }
};*/