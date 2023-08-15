import { database } from '../config';
import tables from '../types/enumTables';

const createTableUser = async (): Promise<void> => {
  try {
    database.query({
      text: `CREATE TABLE IF NOT EXISTS ${tables.users} (
        uid uuid NOT NULL,
        name VARCHAR(20) NOT NULL,
        surname VARCHAR(20) NOT NULL,
        companyName VARCHAR(20) NOT NULL,
        email VARCHAR(30) UNIQUE NOT NULL,
        password VARCHAR(60) NOT NULL,
        PRIMARY KEY (uid)
      );`,
    });
  } catch (error) {
    console.log('🚀 ~ file: User.ts:15 ~ createUser ~ error:', error);
  }
};

export default createTableUser;
