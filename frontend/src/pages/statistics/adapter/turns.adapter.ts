import { Turn, ApiTurnRetrieved } from '@/models/turns.type';


export const turnAdapter = (turn: ApiTurnRetrieved): Turn => {
    return {
    turnId: turn.id,
    estimatedTime: turn.estimated_time,
    totalTime: turn.total_time,
    turnDate: turn.turn_date.toString(),
    foodId: turn.food_id,
    isActive: turn.is_active,
    notificationId: turn.notification_id,
  };
};
