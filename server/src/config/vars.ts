import dotenv from 'dotenv';
dotenv.config();

const environment = process.env.NODE_ENV;
export const PORT = environment !== 'development' ? process.env.PORT : 9000;
