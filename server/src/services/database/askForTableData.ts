import { database } from '../../config';
import { User } from '../../types/User';
import tables from '../../types/enumTables';

export default async function askForTableData(table: tables): Promise<User[]> {
  const query = await database.query({
    text: `SELECT * FROM ${table}`,
  });

  return query.rows;
}
