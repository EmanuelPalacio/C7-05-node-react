/* eslint-disable camelcase */
import { ApiTurn, Turn } from '@/models/turns.type';

export const authAdapter = (turn: ApiTurn): Turn => {
  return {
    id: turn.id,
    time: turn.description,
    table: turn.name,
  };
};
