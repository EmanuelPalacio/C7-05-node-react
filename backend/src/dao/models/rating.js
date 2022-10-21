'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     /*rating.belongsTo(models.turn,{
        foreignKey: 'id',
        as:'turn',
        targetKey: 'turn_id'
      })*/
    }
  }
  rating.init({
    rate: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    turn_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rating',
  });
  return rating;
};