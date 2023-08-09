import dotenv from 'dotenv';
dotenv.config();

const environment = process.env.NODE_ENV;
console.log('🚀 ~ file: vars.ts:5 ~ environment:', environment);
export const PORT = environment !== 'develoment' ? process.env.PORT : 9000;
export const SQL_URL = process.env.SQL_URL;
export const SQL_USERNAME = process.env.SQL_USERNAME;
export const SQL_PASSWORD = process.env.SQL_PASSWORD;
export const SQL_PORT = Number(process.env.SQL_PORT);
export const SQL_DB = environment !== 'develoment' ? 'production' : 'develoment';
