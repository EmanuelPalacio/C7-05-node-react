/* eslint-disable camelcase */
import { ApiUser } from '@/models/user.type';
import { authAdapter } from '../adapter/auth.adapter';
import axios from 'axios';

export const authUrl = import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_AUTH_URL : 'http://localhost:9000/api/auth/login'; 

export const authService = async (userName: string, password: string) => {
  

  try {
    const response = await axios.post<ApiUser>(`${authUrl}`, {
      user_name: userName,
      user_password:password,
    });


    console.log(`La respuesta del backend es ${response.data.msg}`);
    /*
      response.data:{
        "success": boolean,
        "status": number,
        "msg": string
      }
    */

    if (response.data.msg) {
      /* return authAdapter(response.data); // EL ADAPTER transforma los datos que recibe del backend en un objeto manipulable por el front */
      return true;
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
