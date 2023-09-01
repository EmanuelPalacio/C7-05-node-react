import { database } from '../../config';
import { User } from '../../types/user';
import tables from '../../types/enumTables';

export default async function searchUserByEmail(table: tables, email: string): Promise<User> {
  const query = await database.query({
    text: `SELECT * FROM ${table} WHERE email = $1`,
    values: [email],
  });

  return query.rows[0];
}
