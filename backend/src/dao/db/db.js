const { Sequelize } = require('sequelize');
const {
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
} = require('../../config/globals');

const db = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

const getConnection = async() => {
  try {
    await db.authenticate();
    return 'Connection has been established successfully.';
  } catch (error) {
    return 'Unable to connect to the database:', error;
  }
};

module.exports = {
  getConnection,
  db,
};
