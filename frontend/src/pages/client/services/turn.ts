/* eslint-disable camelcase */
import { ApiTurn } from '@/models/turns.type';
import { API_URL, CONFIG_TOKEN } from '@/utils/config';
import axios from 'axios';
import { turnAdapter } from '../adapter/turn.adapter';

export const turnService = async (turnId: string | number) => {
  try {
    const { data, status } = await axios.get<ApiTurn>(`${API_URL}/turns/${turnId}`, CONFIG_TOKEN);

    if (status === 200) {
      return turnAdapter(data);
    }
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
  }
};
