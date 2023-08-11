import { database } from '../config';

const createTableFoods = async (): Promise<void> => {
  try {
    database.query({
      text: `CREATE TABLE IF NOT EXISTS foods (
        id SERIAL NOT NULL,
        name VARCHAR(20) NOT NULL,
        description VARCHAR(255) NOT NULL,
        uid uuid NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (uid) REFERENCES users (uid)
      )`,
    });
  } catch (error) {
    console.log('🚀 ~ file: Foods.ts:14 ~ createTableFoods ~ error:', error);
  }
};

export default createTableFoods;
