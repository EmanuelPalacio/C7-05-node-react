import { store } from '@/redux/store';

const baseUrl = 'http://localhost:9000';

const API_URL = import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_API_URL : baseUrl + '/api';
const LOGIN_URL =
  import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_API_URL + 'api/auth/login' : baseUrl + '/api/auth/login';
const token = store.getState().Cashier.cashierJwt || localStorage.getItem('cashierJwt');

const CONFIG_TOKEN = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export { API_URL, LOGIN_URL, CONFIG_TOKEN };
