import { database } from '../../config';
import tables from '../../types/enumTables';
import { TurnUpdate } from '../../types/turn';

export default async function updateTurns(turn: TurnUpdate): Promise<void> {
  const query = {
    text: `UPDATE ${tables.turns} SET state = $1 WHERE id = $2 AND uid = $3`,
    values: [turn.state, turn.id, turn.uid],
  };
  await database(query);
}
