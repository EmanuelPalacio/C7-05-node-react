import { Fetch } from '../types/query';
import { API } from './vars';

const queryWhitBody = async (url: string, body: object, method: string, auth?: string): Promise<unknown> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (auth) {
    headers['Authorization'] = auth;
  }
  const options: RequestInit = {
    method,
    headers,
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
  post: async (url: string, body: object, auth?: string) => queryWhitBody(url, body, 'POST', auth),
  put: async (url: string, body: object, auth?: string) => queryWhitBody(url, body, 'PUT', auth),
  delete: async (url: string, body: object, auth?: string) => queryWhitBody(url, body, 'DELETE', auth),
};

export default fetchApi;
