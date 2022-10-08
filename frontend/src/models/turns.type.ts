/* import { table } from 'console'; */

export interface ApiTurnRetrieved {
  id: number | string;
  estimated_time: string;
  total_time: number;
  turn_date: number;
  food_id: number | string | null;
  createdAt: Date;
  updatedAt: Date;
  is_active: boolean;
  notification_id: string | null;
}

export interface ApiTurn {
  id: number | string;
  estimated_time: string;
  total_time: number;
  turn_date: number;
  food_id: number | string | null;
  notification_id: string | null;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiCreatedTurn {
  turnToCreate: {
    msg: string;
    status: number;
    turnCreated: ApiTurnRetrieved;
  };
}

export interface ApiUpdateTurn {
  turnToUpdate: {
    msg: string;
    status: number;
    turnBody: ApiTurnRetrieved;
  };
}

export interface ApiTurns {
  turnsRetrieved: {
    msg: string;
    status: number;
    turnsRetrieved: [ApiTurnRetrieved];
  };
}

export interface Turn {
  turnId: number | string;
  estimatedTime: string;
  totalTime: number;
  turnDate: number;
  foodId: number | string | null;
  createdAt?: Date;
  updatedAt?: Date;
  isActive: boolean;
  notificationId: string | null;
}

export const TurnEmptyState: Turn[] = [];
