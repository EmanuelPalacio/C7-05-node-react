import { database } from '../../config';
import { Uid } from '../../types/user';
import tables from '../../types/enumTables';

export default async function searchTurnById({ uid, id }: { uid: Uid; id: string }) {
  const data = await database({
    text: `SELECT * FROM ${tables.turns} WHERE uid = $1 AND state != 'completed' AND id = $2`,
    values: [uid, id],
  });
  return data?.rows[0];
}
