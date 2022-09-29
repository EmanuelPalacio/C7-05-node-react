const { DataTypes } = require('sequelize');
const { db } = require('../db/db');

const Turn = db.define(
    'Turn', {
        turn_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estimated_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        turn_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
<<<<<<< HEAD

=======
        /*food_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },*/
>>>>>>> capas
    }, { timestamps: true },
);

Turn.sync({ alter: true });
module.exports = Turn;