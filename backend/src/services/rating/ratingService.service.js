const { rating } = require('../../dao/models');

module.exports = class {
  async postRating(newRating) {
    const { rate, comment, turn_date } = newRating;
    try {
      let response;
      const ratingCreated = await rating.create({
        rate,
        comment,
        turn: {
          turn_date,
        },
      });

      if (ratingCreated) {
        response = {
          msg: 'Rating created with success',
          status: 200,
        };
      } else {
        response = {
          msg: 'Cannot create rating',
          status: 404,
        };
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getRatings() {
    try {
      const allRatings = rating.findAll();
      return allRatings;
    } catch (error) {
      console.log(error);
    }
  }
};
