import { database } from '../../config';
import tables from '../../types/enumTables';
import { TurnUpdate } from '../../types/turn';

export default async function updateTurns(turn: TurnUpdate): Promise<void> {
  let query;
  if (!turn.min) {
    query = {
      text: `UPDATE ${tables.turns} SET state = $1 WHERE id = $2 AND uid = $3`,
      values: [turn.state, turn.id, turn.uid],
    };
  } else {
    query = {
      text: `UPDATE ${tables.turns} SET state = $1, enddate = enddate + $2 * interval '1 minute'  WHERE id = $3 AND uid = $4`,
      values: [turn.state, turn.min, turn.id, turn.uid],
    };
  }
  await database(query);
}
