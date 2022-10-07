import { ApiTurn, Turn } from '@/models/turns.type';

/* eslint-disable camelcase */

export const turnAdapter = (turn: ApiTurn): Turn => {
  const turnRetrieved = turn;
  return {
    turnId: turnRetrieved.id,
    estimatedTime: turnRetrieved.estimated_time,
    totalTime: turnRetrieved.total_time,
    turnDate: turnRetrieved.turn_date,
    foodId: turnRetrieved.food_id,
    isActive: turnRetrieved.is_active,
    notificationId: turnRetrieved.notification_id,
  };
};
