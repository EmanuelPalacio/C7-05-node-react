const express = require('express');
const cors = require('cors');
const compression = require('compression');
const routes = require('../routes/index.routes');

const app = express();
<<<<<<< HEAD
const router = express.Router
=======
const router = express.Router();
>>>>>>> capas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(compression());

<<<<<<< HEAD
app.use(router(routes));
=======
app.use('/api', routes(router));
>>>>>>> capas

module.exports = app;