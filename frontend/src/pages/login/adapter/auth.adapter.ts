/* eslint-disable camelcase */
import { ApiCashier, Cashier } from '@/models/cashier.type';

export const authAdapter = (cashier: ApiCashier): Cashier => {
  const { jwt, user } = cashier;

  return {
    id: user.id,
    userName: user.user_name,
    cashierJwt: jwt,
    isAuth: true,
  };
};
