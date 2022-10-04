export interface ApiCashier {
  success: boolean;
  status: number;
  msg: string;
  userRetrieved: {
    id: string | number;
    user_name: string;
    token: string;
  };
}

export interface Cashier {
  id: string | number;
  userName: string;
  userJwt: string;
  turns?: string[];
}

export const CashierEmptyState: Cashier = {
  id: '0',
  userName: '',
  userJwt: '',
  turns: [],
};
