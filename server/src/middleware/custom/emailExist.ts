import { verifiyEmail } from '../../services/database';
import tables from '../../types/enumTables';

export default async function emailExist(email: string) {
  const query = await verifiyEmail(tables.users, email);
  if (query) {
    throw new Error(`the email already exists`);
  }
}
