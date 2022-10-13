import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Turn } from '@/models/turns.type';

const ClientTurnEmptyState: Turn = {
  turnId: '',
  isActive: false,
  notificationId: '',
  estimatedTime: '',
  totalTime: 0,
  turnDate: '',
  foodId: null,
};

export const ClientTurnSlice = createSlice({
  name: 'clientTurn',
  initialState: ClientTurnEmptyState,
  reducers: {
    setTurn: (state, action: PayloadAction<Turn>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTurn } = ClientTurnSlice.actions;

export default ClientTurnSlice.reducer;
