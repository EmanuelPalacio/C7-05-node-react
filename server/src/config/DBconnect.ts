import { Pool } from 'pg';
import { SQL_DB, SQL_PASSWORD, SQL_PORT, SQL_URL, SQL_USERNAME } from './vars';
interface Consult<T> {
  text: string;
  values?: Array<T>;
}
const db = new Pool({
  user: SQL_USERNAME,
  host: SQL_URL,
  database: SQL_DB,
  password: SQL_PASSWORD,
  port: SQL_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
export async function database<T>(consult: Consult<T>) {
  const connect = await db.connect();
  try {
    const data = await connect.query(consult);
    return data;
  } catch (error) {
    console.log('🚀 ~ file: DBconnect.ts:23 ~ error:', error);
    return;
  } finally {
    connect.release();
  }
}
