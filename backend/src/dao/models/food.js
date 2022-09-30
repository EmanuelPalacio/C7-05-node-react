/*const { DataTypes } = require('sequelize');
const { db } = require('../db/db');
const Turn = require('./Turn');

const Food = db.define(
  'food', {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    option_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estimated_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: true },
);
/*Food.hasMany(Turn, { foreignKey: 'food_id', as: 'optionFoodName' });
Turn.belongsTo(Food, { foreignKey: 'food_id' })

Food.hasMany(Turn, {
  foreignkey: "food_Id",
  as: 'optionFoodName',
  targetId: "id"
  sourceKey: "id"
});
Turn.belongsTo(Food, { foreingkey: "food_Id", targetId: "id" });

Food.sync({ alter: true });
module.exports = Food;*/