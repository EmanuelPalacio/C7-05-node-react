import { database } from '../config';
import tables from '../types/enumTables';

const createTableTurns = async (): Promise<void> => {
  try {
    database.query({
      text: `CREATE TABLE IF NOT EXISTS ${tables.turns} (
        id VARCHAR(4) NOT NULL,
        uid uuid NOT NULL,
        name VARCHAR(20) NOT NULL,
        time INTEGER NOT NULL,
        creationDate TIMESTAMP NOT NULL,
        endDate TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (uid) REFERENCES users (uid)
      )`,
    });
  } catch (error) {
    console.log('🚀 ~ file: Foods.ts:14 ~ createTableTurns ~ error:', error);
  }
};

export default createTableTurns;
