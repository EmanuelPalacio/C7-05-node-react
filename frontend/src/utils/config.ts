import { store } from '@/redux/store';

const API_URL = import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_API_URL : 'http://localhost:9000/api/';
const AUTH_URL = import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_AUTH_URL : 'http://localhost:9000/api/auth/login';

const token = store.getState().Cashier.cashierJwt || localStorage.getItem('cashierJwt');

const CONFIG_TOKEN = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export { API_URL, AUTH_URL, CONFIG_TOKEN };
