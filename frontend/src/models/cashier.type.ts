export interface ApiCashier {
  jwt: string;
  user: {
    id: string | number;
    user_name: string;
  };
}

export interface Cashier {
  id: string | number;
  userName: string;
  cashierJwt: string;
  isAuth: boolean;
}

export const CashierEmptyState: Cashier = {
  id: '0',
  userName: '',
  cashierJwt: '',
  isAuth: false,
};
