const { Sequelize } = require('sequelize');
const {
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
} = require('../../config/globals');

const db = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  define: {
    freezeTableName: true,
  },
  logging: false,
  host: DB_HOST,
  port: DB_PORT,
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