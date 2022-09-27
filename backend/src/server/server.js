const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(compression());

module.exports = app;
