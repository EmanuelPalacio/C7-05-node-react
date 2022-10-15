const { Rating } = require('../../services/index.service.js');
const ratingService = new Rating();

exports.postRating = async(req, res) => {
  const ratingData = req.body;
  try {
    const ratingToCreate = await ratingService.postRating(ratingData);
    const { status } = ratingToCreate;
    res.status(status).json({
      ratingToCreate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


