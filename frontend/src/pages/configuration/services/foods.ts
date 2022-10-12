/* eslint-disable camelcase */
import { Food, ApiFoods, ApiFood, ApiCreateFood } from '@/models/foods.type';
import { API_URL, CONFIG_TOKEN } from '@/utils/config';
import axios from 'axios';
import { foodAdapter } from '../adapters/food.adapter';

export const foodCreateService = async (food: Food) => {
  const foodData = {
    option_name: food.optionName,
    estimated_time: food.estimatedTime,
  };

  try {
    const { data, status } = await axios.post<ApiCreateFood>(`${API_URL}/food`, foodData, CONFIG_TOKEN);

    if (status === 200) {
      return foodAdapter(data.foodToCreate.foodCreated);
    }
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
  }
};

export const foodsService = async () => {
  try {
    const { data, status } = await axios.get<ApiFoods>(`${API_URL}/food`, CONFIG_TOKEN);

    if (status === 200) {
      return data.Options.foodsRetrieved.map((food: ApiFood) => foodAdapter(food));
    }
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
  }
};
