import { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './config/vars';
import router from './routes';
import createTableModels from './models';
import { allowOrigin, app, io, server } from './config';
import listenToSocket from './controllers/sockets/listenToSockets';

/* ------ SERVER CONFIG ------- */
app.use(morgan('dev'));
//middlewares
app.use(
  cors({
    origin: allowOrigin,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));
// Routes
app.use('/api', router);

server.listen(PORT);

/* ------ DATABASE ------- */
createTableModels();
/* ------ WEB SOCKET ------- */
io.on('connection', listenToSocket);

/* ----- RESET CONSOLE ------ */
console.clear();
