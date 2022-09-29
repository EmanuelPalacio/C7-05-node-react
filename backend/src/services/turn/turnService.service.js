const { Turn, Stat, Food, Cashier } = require('../../dao/models');

module.exports = class {
  async createUser() {
    let response;
    let turnRetrieved = await Turn.length;
    try {
      response = {
        msg: 'Testing funcionality',
        status: 200,
        turn: turnRetrieved,
      };
      return response;
    } catch (error) {
      response = {
        msg: error,
      };
    }
  }
};