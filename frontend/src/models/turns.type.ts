/* import { table } from 'console'; */

export interface ApiTurn {
  id: string | number;
  name: string;
  description: string;
}

export interface Turn {
  id: string | number;
  time: number;
  table: number;
}

export const TurnEmptyState: Turn[] = [];
