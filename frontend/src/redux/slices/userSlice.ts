import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserEmptyState } from '@/models/user.type';

export const counterSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions;

export default counterSlice.reducer;
