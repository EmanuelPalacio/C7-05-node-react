const { Food } = require('../../services/index.service.js');
const foodService = new Food();

exports.createFood = async(req, res) => {
  const food = req.body;
  try {
    const foodToCreate = await foodService.createFood(food);
    const { status } = foodToCreate;
    res.status(status).json({
      foodToCreate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.listFood = async(req, res) => {
  try {
    const foodList = await foodService.getOptionFood();
    res.json({Options: foodList})
    //console.log(foodList)
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

exports.updateFood = async(req, res, next) => {
  try {
    const id = req.params.id;
    const foodBody = req.body;
    const foodToUpdate = await foodService.updateFood(id, foodBody);
    console.log(foodToUpdate);
    const { status } = foodToUpdate;
    res.status(status).json({
      foodToUpdate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteFood = async(req, res, next) => {
  const id = req.params.id;
  try {
    const foodRetrieved = await foodService.deleteFood(id);
    const { status } = foodRetrieved;
    res.status(status).json({
      foodRetrieved,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
