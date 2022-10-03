import { ApiUser, User } from '@/models/user.type';

export const authAdapter = (user: ApiUser): User => {
  return {
    id: user.id,
    userName: user.user_name,
    turns: user.turn_id,
    userJwt: user.token,
  };
};
