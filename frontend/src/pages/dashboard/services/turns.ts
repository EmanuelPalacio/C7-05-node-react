/* eslint-disable camelcase */
import { ApiCreatedTurn } from '@/models/turns.type';
import { turnAdapter } from '../adapter/turns.adapter';
import axios from 'axios';
import { API_URL, CONFIG_TOKEN } from '@/utils/config';

interface createProps {
  turnDate: string;
  estimatedTime: string;
  totalTime: number;
}

interface updateProps {
  turnId?: number | string;
  turnDate: string;
  estimatedTime: string;
  totalTime: number;
}

export const turnCreateService = async ({ totalTime, estimatedTime, turnDate }: createProps) => {
  const postData = {
    total_time: totalTime,
    turn_date: turnDate,
    estimated_time: estimatedTime,
  };

  console.log(postData);

  try {
    const { data, status } = await axios.post<ApiCreatedTurn>(`${API_URL}/turns`, postData, {
      headers: {
        'Content-Type': 'application/json',
        ...CONFIG_TOKEN.headers,
      },
    });

    if (status === 200) {
      return turnAdapter(data.turnToCreate.turnCreated); // EL ADAPTER transforma los datos que recibe del backend en un objeto manipulable por el front */
    }
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
    console.log(error);
  }
};

export const turnUpdateService = async ({ turnId, totalTime, estimatedTime, turnDate }: updateProps) => {
  try {
    const { data, status } = await axios.put<ApiCreatedTurn>(`${API_URL}/turns${turnId}`, {
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
