export const URL = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.PROD;
export const API = `${URL}/api`;
export const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;
