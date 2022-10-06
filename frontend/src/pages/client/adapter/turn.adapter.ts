/* eslint-disable camelcase */
export interface ApiTurn {
  turnRetrieved: {
    msg: string;
    status: number;
    turnRetrieved: {
      id: number | string;
      estimated_time: number;
      total_time: number;
      turn_date: number;
      food_id: number | string | null;
      createdAt: Date;
      updatedAt: Date;
    };
  };
}

export interface Turn {
  turnId: number | string;
  estimatedTime: number;
  totalTime: number;
  turnDate: number;
  foodId: number | string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export const turnAdapter = (turn: ApiTurn): Turn => {
  const { turnRetrieved } = turn.turnRetrieved;

  return {
    turnId: turnRetrieved.id,
    estimatedTime: turnRetrieved.estimated_time,
    totalTime: turnRetrieved.total_time,
    turnDate: turnRetrieved.turn_date,
    foodId: turnRetrieved.food_id,
  };
};
