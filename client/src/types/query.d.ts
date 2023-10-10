/* eslint-disable @typescript-eslint/no-explicit-any */
interface Fetch {
  get: (url: string, auth?: string) => Promise<any>;
  post: (url: string, body: object, auth?: string) => Promise<any>;
  put: (url: string, body: object, auth?: string) => Promise<any>;
  delete: (url: string, body: object, auth?: string) => Promise<any>;
}

export interface LoginResponse {
  ok: boolean;
  msg: string;
  token: string;
}
