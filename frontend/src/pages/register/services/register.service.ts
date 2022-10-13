/* eslint-disable camelcase */
import { ApiCashier } from '@/models/cashier.type';
import axios from 'axios';
import { API_URL } from '@/utils/config';
import { registerAdapter } from '../adapter/register.adapter';

export const registerService = async (email: string, password: string) => {
  try {
    const { data } = await axios.post<ApiCashier>(`${API_URL}/auth/register`, {
      user_name: email,
      user_password: password,
    });

    return registerAdapter(data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.request.status === 409)
      throw Error('Ya existe ese usuario en la base de datos. Intente iniciar sesión o cree otra cuenta.');
    throw Error('Hubo un problema en la creación de un nuevo usuario, por favor, inténtelo de nuevo más tarde');
  }
};
