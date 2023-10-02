import { database } from '../../config';
import { User } from '../../types/user';
import tables from '../../types/enumTables';

export default async function searchUserByEmail(table: tables, email: string): Promise<User | null> {
  const query = await database({
    text: `SELECT * FROM ${table} WHERE email = $1`,
    values: [email],
  });
  if (query) {
    return query.rows[0];
  } else {
    return null;
  }
}
