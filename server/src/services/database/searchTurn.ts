import { database } from '../../config';
import { Uid } from '../../types/user';
import tables from '../../types/enumTables';

export default async function searchTurn(uid: Uid) {
  const data = await database({
    text: `SELECT * FROM ${tables.turns} WHERE uid = $1 AND state != 'completed'`,
    values: [uid],
  });
  return data?.rows;
}
