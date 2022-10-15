import { ApiFood, Food } from '@/models/foods.type';

export const foodAdapter = (food: ApiFood): Food => {
  return {
    foodId: food.id,
    optionName: food.option_name,
    estimatedTime: food.estimated_time,
  };
};
