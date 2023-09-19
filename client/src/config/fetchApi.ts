import { Fetch } from '../types/query';
import { API } from './vars';

const queryWhitBody = async (url: string, method: string, auth?: string, body?: object): Promise<unknown> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  const options: RequestInit = {
    method,
    headers,
  };
  const response = await fetch(API + url, options);
  if (auth) {
    headers['Authorization'] = auth;
  }
  if (body) {
    options['body'] = JSON.stringify(body);
  }
  if (!response.ok) {
    const error = await response.json();

    throw { ...error, status: response.status };
  }
  return await response.json();
};

const fetchApi: Fetch = {
  get: async (url: string, auth?: string) => queryWhitBody(url, 'GET', auth),
  post: async (url: string, body: object, auth?: string) => queryWhitBody(url, 'POST', auth, body),
  put: async (url: string, body: object, auth?: string) => queryWhitBody(url, 'PUT', auth, body),
  delete: async (url: string, body: object, auth?: string) => queryWhitBody(url, 'DELETE', auth, body),
};

export default fetchApi;
