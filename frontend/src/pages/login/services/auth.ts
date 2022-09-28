/* eslint-disable camelcase */
import { ApiUser } from '@/models/user.type';
import { authAdapter } from '../adapter/auth.adapter';
import axios from 'axios';
import dataUsers from './auth.json';

export const authUrl = process.env.NODE_ENV === 'production' ? process.env.AUTH_URL : 'http://localhost:3000/auth';

export const authService = async (userName: string, password: string) => {
  /*   const response = await axios.post<ApiUser>(`${authUrl}`, {
    user_name: userName,
    password,
    turn_id: [],
  }); */
  try {
    const response = dataUsers.find((user) => user.user_name === userName && user.user_password === password);

    if (response) {
      return authAdapter(response);
    }
    return null;
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
  }

  /* return authAdapter(response.data) */
};
