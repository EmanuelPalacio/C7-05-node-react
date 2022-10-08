import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Turn } from '@/pages/client/adapter/turn.adapter';

const ClientTurnEmptyState: Turn = {
  turnId: '',
  estimatedTime: 0,
  totalTime: 0,
  turnDate: 0,
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
