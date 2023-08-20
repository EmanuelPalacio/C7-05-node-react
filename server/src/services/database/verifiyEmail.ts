import { database } from '../../config';
import { User } from '../../types/userRequest';
import tables from '../../types/enumTables';

export default async function verifyEmail(table: tables, email: string): Promise<User> {
  const query = await database.query({
    text: `SELECT * FROM ${table} WHERE email = $1`,
    values: [email],
  });

  return query.rows[0];
}
