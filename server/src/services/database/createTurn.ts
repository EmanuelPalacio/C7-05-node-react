import { database } from '../../config';
import tables from '../../types/enumTables';
import { TurnCreate } from '../../types/turn';

export default async function createTurn(turn: TurnCreate): Promise<void> {
  const query = {
    text: `INSERT INTO ${tables.turns} (id, uid, name, time, creationDate, endDate, state) VALUES($1, $2, $3, $4, $5, $6, $7)`,
    values: [turn.id, turn.uid, turn.name, turn.time, turn.creationDate, turn.endDate, turn.state],
  };
  await database(query);
}
