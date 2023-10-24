import { searchUserByEmail } from '../../services/database';
import tables from '../../types/enumTables';

export default async function emailExist(emailOrID: string) {
  const query = await searchUserByEmail(tables.users, emailOrID);
  if (query) {
    throw new Error(`the email already exists`);
  }
}
