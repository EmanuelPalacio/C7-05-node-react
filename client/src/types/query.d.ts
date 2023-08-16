/* eslint-disable @typescript-eslint/no-explicit-any */
interface Fetch {
  get: (url: string) => Promise<any>;
  post: (url: string, body: object, url?: string) => Promise<any>;
  put: (url: string, body: object, url?: string) => Promise<any>;
  delete: (url: string, body: object, url?: string) => Promise<any>;
}

export interface LoginResponse {
  ok: boolean;
  msg: string;
  token: string;
}
