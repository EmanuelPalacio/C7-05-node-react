/* eslint-disable camelcase */
import { ApiCreatedTurn, ApiTurns, ApiUpdateTurn } from '@/models/turns.type';
import { turnAdapter } from '../adapter/turns.adapter';
import axios from 'axios';
import { API_URL, CONFIG_TOKEN } from '@/utils/config';

interface createProps {
  turnDate: string;
  estimatedTime: string;
  totalTime: number;
  foodId: number | string;
}

interface updateProps {
  turn_date?: string;
  estimated_time?: string;
  total_time?: number;
  is_active?: boolean;
}

export const turnCreateService = async ({ totalTime, estimatedTime, turnDate, foodId }: createProps) => {
  const postData = {
    total_time: totalTime,
    turn_date: turnDate,
    estimated_time: estimatedTime,
    food_id: foodId,
  };

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

export const activesTurnsService = async () => {
  try {
    const { data, status } = await axios.get<ApiTurns>(`${API_URL}/turns`, CONFIG_TOKEN);
    if (status === 200) {
      return data.turnsRetrieved.turnsRetrieved.filter((turn) => turn.is_active).map((turn) => turnAdapter(turn));
    }
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
  }
};

export const deleteTurnService = async (turnId: number | string) => {
  try {
    const { status } = await axios.delete(`${API_URL}/turns/${turnId}`, CONFIG_TOKEN);

    if (status === 200) {
      return true;
    }
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
  }
};

export const turnUpdateService = async (turnId: string | number, dataUpdate: updateProps) => {
  try {
    const { data, status } = await axios.put<ApiUpdateTurn>(`${API_URL}/turns/${turnId}`, dataUpdate);

    if (status === 200) {
      return turnAdapter(data.turnToUpdate.turnBody); // EL ADAPTER transforma los datos que recibe del backend en un objeto manipulable por el front */
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
