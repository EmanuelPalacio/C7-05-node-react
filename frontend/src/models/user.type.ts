export interface ApiUser {
  success: boolean,
  status: number,
  msg: string,
  /*
  id: number;
  user_name: string;
  turn_id: number[];
  token: string;
  */
}

export interface User {
  id: number;
  userName: string;
  turns: number[];
  userJwt: string;
}

export const UserEmptyState: User = {
  id: 0,
  userName: '',
  turns: [],
  userJwt: '',
};
