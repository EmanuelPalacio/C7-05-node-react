export interface ApiTurn {
  id: string | number;
  name: string;
  description: string;
}

export interface Turn {
  id: string | number;
  time: string;
  table: string;
}

export const TurnEmptyState: Turn[] = [];
