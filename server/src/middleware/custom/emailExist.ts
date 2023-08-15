import { askForTableData } from '../../services/database';
import tables from '../../types/enumTables';

export default async function emailExist(email: string) {
  const query = await askForTableData(tables.users);
  const existEmail = query.some((user) => user.email === email);
  if (existEmail) {
    throw new Error(`the email already exists`);
  }
}
