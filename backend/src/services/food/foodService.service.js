const {food}   = require('../../dao/models');

module.exports = class {
  async createFood(newFood) {
    const { option_name, estimated_time } = newFood;
    try {
      let response;
      const foodCreated = await food.create({
        option_name,
        estimated_time,
      }, {
        fields: ['option_name', 'estimated_time'],
      }, );

      if (foodCreated) {
        response = {
          msg: 'Food created with success',
          status: 200,
        };
      } else {
        response = {
          msg: 'Cannot create food',
          status: 404,
        };
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
    
      
  async getOptionFood() {
    try {
      let response;
      const foodsRetrieved = await food.findAll();
      if (!foodsRetrieved ) {
        response = {
          msg: ' No foods founded',
          status: 404,
        };
      } else {
        response = {
          msg: 'Ok',
          status: 200,
          foodsRetrieved,
        };
      }
      return response;
    } catch (error) {
      return error.message;
    }
  }

  async updateFood(id, foodBody) {
    try {
      let response;

      let condition;
      let options;

      condition = { where: { id: id } };
      options = { multi: true };

      if (!condition ) {
        response = {
          msg: `Cannot find food `,
          status: 404,
        };
      } else {
        await food.update(foodBody, condition, options);

        response = {
          msg: 'Food updated',
          status: 200,
          foodBody,
        };
      }

      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteFood(id) {
    try {
      let response;
      let condition;
      condition = { where: { id: id } };
      const foodRetrieved = await food.destroy(condition);
      console.log(foodRetrieved);
      if (!foodRetrieved) {
        response = {
          msg: 'No option food founded',
          status: 404,
        };
      } else {
        response = {
          msg: 'Option food deleted with success',
          status: 200,
        };
      }

      return response;
    } catch (error) {}
  }

};