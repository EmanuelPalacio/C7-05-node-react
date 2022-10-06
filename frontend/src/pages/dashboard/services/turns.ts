/* eslint-disable camelcase */
import { ApiCreatedTurn } from '@/models/turns.type';
import { turnAdapter } from '../adapter/turns.adapter';
import axios from 'axios';
import { API_URL } from '@/utils/config';

interface IProps {
  turnId: number | string;
  turnDate: number;
  estimatedTime: number;
  totalTime: number;
}

export const turnCreateService = async ({ totalTime, estimatedTime, turnDate }: IProps) => {
  try {
    const { data, status } = await axios.post<ApiCreatedTurn>(`${API_URL}/api/turns`, {
      total_time: totalTime,
      turn_date: turnDate,
      estimated_time: estimatedTime,
    });

    if (status === 200) {
      return turnAdapter(data.turnToCreate.turnCreated); // EL ADAPTER transforma los datos que recibe del backend en un objeto manipulable por el front */
    }
    return null;
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
  }
};

export const turnUpdateService = async ({ turnId, totalTime, estimatedTime, turnDate }: IProps) => {
  try {
    const { data, status } = await axios.put<ApiCreatedTurn>(`${API_URL}/api/turns/${turnId}`, {
      total_time: totalTime,
      turn_date: turnDate,
      estimated_time: estimatedTime,
    });

    if (status === 200) {
      return turnAdapter(data.turnToCreate.turnCreated); // EL ADAPTER transforma los datos que recibe del backend en un objeto manipulable por el front */
    }
    return null;
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
  }
};
