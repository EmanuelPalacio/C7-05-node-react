const { turn } = require('../../dao/models');
module.exports = class {
  async createTurn(turnBody) {
    try {
      let response;

      let turnCreated = await turn.create(turnBody);
      if (turnCreated) {
        response = {
          msg: 'Turn created with success',
          status: 200,
          turnCreated,
        };
      } else {
        response = {
          msg: 'Could not create turn',
          status: 400,
        };
      }
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateTurn(id, turnBody) {
    try {
      let response;

      let condition;
      let options;

      condition = { where: { id: id } };
      options = { multi: true };

      if (condition === null) {
        response = {
          msg: `Cannot find turn `,
          status: 404,
        };
      } else {
        await turn.update(turnBody, condition, options);

        response = {
          msg: 'Turn updated',
          status: 200,
          turnBody,
        };
      }

      return response;
    } catch (error) {
      return error;
    }
  }
  async getTurns() {
    try {
      let response;
      const turnsRetrieved = await turn.findAll();
      if (turnsRetrieved === null) {
        response = {
          msg: ' No turns founded',
          status: 404,
        };
      } else {
        response = {
          msg: 'Ok',
          status: 200,
          turnsRetrieved,
        };
      }

      return response;
    } catch (error) {
      return error.message;
    }
  }

  async getTurn(id) {
    try {
      let response;
      let condition;
      condition = { where: { id: id } };
      const turnRetrieved = await turn.findOne(condition);
      if (turnRetrieved === null) {
        response = {
          msg: ' No turn founded',
          status: 404,
        };
      } else {
        response = {
          msg: 'Ok',
          status: 200,
          turnRetrieved,
        };
      }

      return response;
    } catch (error) {
      return error.message;
    }
  }

  async deleteTurn(id) {
    try {
      let response;
      let condition;
      condition = { where: { id: id } };
      const turnRetrieved = await turn.destroy(condition);
      console.log(turnRetrieved);
      if (turnRetrieved === 0) {
        response = {
          msg: 'No turn founded',
          status: 404,
        };
      } else {
        response = {
          msg: 'Turn deleted with success',
          status: 200,
        };
      }

      return response;
    } catch (error) {}
  }
};