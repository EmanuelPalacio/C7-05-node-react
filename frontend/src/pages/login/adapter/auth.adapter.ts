/* eslint-disable camelcase */
import { ApiCashier, Cashier } from '@/models/user.type';

export const authAdapter = (user: ApiCashier): Cashier => {
  const { id, user_name, token } = user.userRetrieved;

  return {
    id: id,
    userName: user_name,
    userJwt: token,
  };
};
