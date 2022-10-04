const app = require('./server');

const { PORT } = require('../config/globals');


//const { getConnection } = require("../dao/db/db");
//getConnection().then((message) => {
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
//}).catch((err) => { reject(err); });