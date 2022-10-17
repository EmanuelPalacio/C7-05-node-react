import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Turn } from '@/models/turns.type';

const ClientTurnEmptyState: Turn = {
  turnId: '',
  isActive: false,
  notificationId: '',
  estimatedTime: '',
  totalTime: 0,
  turnDate: '0',
  foodId: null,
};

export const ClientTurnSlice = createSlice({
  name: 'clientTurn',
  initialState: ClientTurnEmptyState,
  reducers: {
    setTurn: (state, action: PayloadAction<Turn>) => {
      return action.payload;
    },
    resetTurn: () => {
      return ClientTurnEmptyState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTurn, resetTurn } = ClientTurnSlice.actions;

export default ClientTurnSlice.reducer;
