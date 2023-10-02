import { database } from '../../config';
import tables from '../../types/enumTables';
import { User } from '../../types/user';

export default async function searchUserById(table: tables, id: string): Promise<User | null> {
  const query = await database({
    text: `SELECT * FROM ${table} WHERE uid = $1`,
    values: [id],
  });

  return query?.rows[0];
}
