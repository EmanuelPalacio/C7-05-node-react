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
  },
});

// Action creators are generated for each case reducer function
export const { setCashier } = cashierSlice.actions;

export default cashierSlice.reducer;
