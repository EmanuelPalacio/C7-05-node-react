const express = require('express');
const cors = require('cors');
const compression = require('compression');
const routes = require('../routes/index.routes');

//swagger
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = require('../docs/swagger');

const swaggerDocs = swaggerJSDoc(swaggerOptions);

//ver swagger en localhost:9000/api-docs

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(cors());
app.use(compression());

//middlewares
const passportControl = require('../middlewares/passport-control');
app.use(passportControl.initialize());

const oneSignalResponse = require('../middlewares/one-signal');
//

app.use('/api', routes(router));

module.exports = app;
