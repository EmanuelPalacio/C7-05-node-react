import express from 'express';
import { PORT } from './config/vars';

const app = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log('se inicio en el puerto', PORT);
});
