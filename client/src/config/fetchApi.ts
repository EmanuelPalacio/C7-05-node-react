import { Fetch } from '../types/query';
import { API } from './vars';

const queryWhitBody = async (url: string, body: object): Promise<unknown> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(API + url, options);
  if (!response.ok) {
    const error = await response.json();
    throw { ...error, status: response.status };
  }
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
    const response = await fetch(API + url, options);
    if (!response.ok) {
      const error = await response.json();
      throw { ...error, status: response.status };
    }
    return await response.json();
  },
  post: queryWhitBody,
  put: queryWhitBody,
  delete: queryWhitBody,
};

export default fetchApi;
