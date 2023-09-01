import { database } from '../../config';
import tables from '../../types/enumTables';
import { TurnCreate } from '../../types/turn';

export default async function createTurn(turn: TurnCreate): Promise<void> {
  const query = {
    text: `INSERT INTO ${tables.turns} (id, uid, name, time, creationDate) VALUES($1, $2, $3, $4, $5)`,
    values: [turn.id, turn.uid, turn.name, turn.time, turn.creationDate],
  };

  await database.query(query);
}
