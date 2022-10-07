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

//middlewares
const passportControl = require('../middlewares/passport-control')
app.use(passportControl.initialize())

const oneSignalResponse = require('../middlewares/one-signal');
// oneSignalResponse.crearNotificacion('560e5ab2-9ceb-4379-8cef-545851f0b9e9'); testing
//

app.use('/api', routes(router));

module.exports = app;