const express = require('express');
const cors = require('cors');
const compression = require('compression');
const routes = require('../routes/index.routes');

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(compression());

app.use('/api', routes(router));

module.exports = app;