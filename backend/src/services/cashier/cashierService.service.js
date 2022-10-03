const { cashier } = require('../../dao/models');
module.exports = class {
  async createUser(user) {
    const { user_name, user_password } = user;
    try {
      let response;
      const userCreated = await cashier.create({
        user_name,
        user_password,
      }, {
        fields: ['user_name', 'user_password'],
      }, );

      if (userCreated) {
        response = {
          msg: 'User created with success',
          status: 200,
          userCreated,
        };
      } else {
        response = {
          msg: 'Cannot create user',
          status: 404,
        };
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async findUserById(user) {
    try {
      let response;
      let userRetrieved = await cashier.findOne({
        where: { user_name: user.user_name },
      });
      if (
        userRetrieved &&
        user.user_password === userRetrieved.dataValues.user_password
      ) {
        response = {
          msg: 'User exist',
          status: 200,
          userRetrieved,
          success: true,
        };
      } else {
        response = {
          msg: 'User doesnt found',
          status: 404,
          success: false,
        };
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};