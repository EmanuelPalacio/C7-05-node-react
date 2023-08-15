import { Fetch } from '../types/query';
import { API } from './vars';

const queryWhitBody = async (body: object, url?: string): Promise<unknown> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const api = url ? url : API;
  const response = await fetch(api, options);
  return await response.json();
};

const fetchApi: Fetch = {
  get: async (url): Promise<unknown> => {
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const api = url ? url : API;
    const response = await fetch(api, options);
    return await response.json();
  },
  post: queryWhitBody,
  put: queryWhitBody,
  delete: queryWhitBody,
};

export default fetchApi;
