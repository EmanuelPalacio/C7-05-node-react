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
      turn.hasOne(models.rating, {
        foreignKey: 'id',
        targetKey: 'rating_id',
      });
    }
  }
  turn.init(
    {
      estimated_time: DataTypes.STRING,
      total_time: DataTypes.BIGINT,
      turn_date: DataTypes.STRING,
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      food_id: DataTypes.INTEGER,
      notification_id: DataTypes.STRING, //eee47dab-b232-430a-8203-242191c3f344
    },
    {
      sequelize,
      modelName: 'turn',
    },
  );
  return turn;
};
