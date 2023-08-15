import { askForTableData } from '../../services/database';
import tables from '../../types/enumTables';

export default async function emailNotExist(email = '') {
  const query = await askForTableData(tables.users);
  const existEmail = query.some((user) => user.email === email);
  if (!existEmail) {
    throw new Error(`email not exist`);
  }
}
