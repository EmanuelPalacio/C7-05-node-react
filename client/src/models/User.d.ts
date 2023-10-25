import { Status } from '../types/status';

export type Uid = `${string}-${string}-${string}-${string}-${string}`;

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister extends UserLogin {
  name: string;
  surname: string;
  companyName: string;
}

export interface User extends Omit<UserRegister, 'password'> {
  uid: Uid | null;
  token: string;
  status: Status;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}
