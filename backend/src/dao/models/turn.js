'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      turn.belongsTo(models.food, {
        foreignKey: 'id',
        //targetKey: 'food_id'
      });
    }
  }
  turn.init({
    estimated_time: DataTypes.INTEGER,
    total_time: DataTypes.INTEGER,
    turn_date: DataTypes.INTEGER,
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    food_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'turn',
  }, );
  return turn;
};