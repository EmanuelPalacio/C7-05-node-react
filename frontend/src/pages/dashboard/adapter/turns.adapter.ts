import { ApiTurn, Turn, ApiCreatedTurn } from '@/models/turns.type';

export const turnAdapter = (turn: ApiTurn): Turn => {
  const { turnRetrieved } = turn.turnRetrieved;

  return {
    turnId: turnRetrieved.id,
    estimatedTime: turnRetrieved.estimated_time,
    totalTime: turnRetrieved.total_time,
    turnDate: turnRetrieved.turn_date,
    foodId: turnRetrieved.food_id,
    isActive: turnRetrieved.isActive,
  };
};

export const turnCreatedAdapter = (turn: ApiCreatedTurn): Turn => {
  const { turnCreated } = turn.turnToCreate;

  return {
    turnId: turnCreated.id,
    estimatedTime: turnCreated.estimated_time,
    totalTime: turnCreated.total_time,
    turnDate: turnCreated.turn_date,
    foodId: turnCreated.food_id,
    isActive: turnCreated.isActive,
  };
};
