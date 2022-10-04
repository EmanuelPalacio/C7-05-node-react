import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cashier, CashierEmptyState } from '@/models/cashier.type';

export const cashierSlice = createSlice({
  name: 'cashier',
  initialState: CashierEmptyState,
  reducers: {
    setCashier: (state, action: PayloadAction<Cashier>) => {
      state = action.payload;
      return state;
    },
    setCashierJwt: (state, action: PayloadAction<string>) => {
      state.cashierJwt = action.payload;
      state.isAuth = true;
      return state;
    },
    setCashierName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      return state;
    },
    setCashierId: (state, action: PayloadAction<string | number>) => {
      state.id = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCashier, setCashierJwt } = cashierSlice.actions;

export default cashierSlice.reducer;
