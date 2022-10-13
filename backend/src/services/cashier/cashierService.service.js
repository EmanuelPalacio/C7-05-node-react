const { cashier } = require('../../dao/models');
const bcrypt = require('bcryptjs');
module.exports = class {
  async createUser(user) {
    let { user_name, user_password } = user;

    // Se le agrega sal al hash para dificultar la desencriptación
    const salt = 10;
    user_password = await bcrypt.hash(user_password, salt);

    try {
      let response;
      const userCreated = await cashier.create(
        {
          user_name,
          user_password,
        },
        {
          fields: ['user_name', 'user_password'],
        },
      );

      if (userCreated) {
        response = {
          msg: 'User created with success',
          status: 200,
          user: userCreated,
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

  async findUser(user) {
    try {
      let response;
      let userRetrieved = await cashier.findOne({
        where: { user_name: user.user_name },
      });
      if (
        userRetrieved &&
        (await bcrypt.compare(
          user.user_password,
          userRetrieved.dataValues.user_password,
        ))
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

  async findUserById(id) {
    try {
      let response;
      let userRetrieved = await cashier.findOne({
        where: { id: id },
      });
      if (userRetrieved) {
        response = {
          user: userRetrieved.dataValues,
          success: true,
          status: 200,
        };
      } else {
        response = {
          user: userRetrieved.dataValues,
          success: false,
          status: 401,
        };
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
