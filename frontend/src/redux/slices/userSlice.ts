import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cashier, CashierEmptyState } from '@/models/user.type';

export const counterSlice = createSlice({
  name: 'user',
  initialState: CashierEmptyState,
  reducers: {
    setUser: (state, action: PayloadAction<Cashier>) => {
      state = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions;

export default counterSlice.reducer;
