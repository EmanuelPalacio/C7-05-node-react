/* import { table } from 'console'; */

interface ApiTurnRetrieved {
  id: number | string;
  estimated_time: number;
  total_time: number;
  turn_date: number;
  food_id: number | string | null;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface ApiTurn {
  turnRetrieved: {
    msg: string;
    status: number;
    turnRetrieved: ApiTurnRetrieved;
  };
}

export interface ApiCreatedTurn {
  turnToCreate: {
    msg: string;
    status: number;
    turnCreated: ApiTurnRetrieved;
  };
}

export interface ApiTurns {
  turnRetrieved: {
    msg: string;
    status: number;
    turnRetrieved: [ApiTurnRetrieved];
  };
}

export interface Turn {
  turnId: number | string;
  estimatedTime: number;
  totalTime: number;
  turnDate: number;
  foodId: number | string | null;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export const TurnEmptyState: Turn[] = [];
