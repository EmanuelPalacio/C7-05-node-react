/* eslint-disable @typescript-eslint/no-explicit-any */
interface Fetch {
  get: (url?: string) => Promise<any>;
  post: (body: object, url?: string) => Promise<any>;
  put: (body: object, url?: string) => Promise<any>;
  delete: (body: object, url?: string) => Promise<any>;
}

export interface LoginResponse {
  ok: boolean;
  msg: string;
  token: string;
}
