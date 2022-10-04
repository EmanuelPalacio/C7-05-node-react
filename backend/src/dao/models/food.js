'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      food.hasMany(models.turn,{
        foreignKey: 'food_id'
      })
    }
  }
  food.init({
    option_name: DataTypes.STRING,
    estimated_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'food',
  });
  return food;
};