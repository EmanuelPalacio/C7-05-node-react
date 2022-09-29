<<<<<<< HEAD
const { DataTypes }  = require('sequelize');
=======
const { DataTypes } = require('sequelize');
>>>>>>> capas
const { db } = require('../db/db');

const Cashier = db.define(
    'Cashier', {
        cashier_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: true },
);

Cashier.sync({ alter: true });
module.exports = Cashier;