import { Pool } from 'pg';
import { SQL_DB, SQL_PASSWORD, SQL_PORT, SQL_URL, SQL_USERNAME } from './vars';

export const database = new Pool({
  user: SQL_USERNAME,
  host: SQL_URL,
  database: SQL_DB,
  password: SQL_PASSWORD,
  port: SQL_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
