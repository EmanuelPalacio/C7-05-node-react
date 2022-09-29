const { DataTypes } = require('sequelize');
const { db } = require('../db/db');

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

Food.sync({ alter: true });
module.exports = Food;