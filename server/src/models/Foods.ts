import { database } from '../config';

const createTableFoods = async (): Promise<void> => {
  try {
    database.query({
      text: `CREATE TABLE IF NOT EXISTS foods(
        userId integer NOT NULL REFERENCES users (uid),
        name VARCHAR(20),
        category  VARCHAR(15)
      )`,
    });
  } catch (error) {
    console.log('🚀 ~ file: Foods.ts:14 ~ createTableFoods ~ error:', error);
  }
};

export default createTableFoods;
