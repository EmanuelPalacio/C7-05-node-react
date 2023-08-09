<<<<<<< HEAD
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './config/vars';
import router from './routes';
import { connectSQL } from './config';

const app = express();

/* ------ SERVER CONFIG ------- */
app.use(morgan('dev'));
//middlewares
app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));
// Routes
app.use('/api', router);

app.listen(PORT, () => {
  console.log('server iniciado PORT || ', PORT);
});

/* ------ DATABASE ------- */

connectSQL
  .connect()
  .then(() => {
    console.log('SQL connection successful ');
  })
  .catch((err) => {
    console.log('sql connection failed', err);
  });
=======
import express from 'express';
import { PORT } from './config/vars';

const app = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log('se inicio en el puerto', PORT);
});
>>>>>>> 5b0a29e43ac64cb573039e2f2fffd762e32592c1
