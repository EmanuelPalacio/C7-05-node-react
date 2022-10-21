import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Turn } from '@/models/turns.type';

const ClientTurnEmptyState: Turn[] = [{
  turnId: '',
  isActive: false,
  notificationId: '',
  estimatedTime: '',
  totalTime: 0,
  turnDate: '0',
  foodId: null,
}];

export const completedShifts = createSlice({
  name: 'completedShifts',
  initialState: ClientTurnEmptyState,
  reducers: {
    setShifts: (state, action: PayloadAction<Turn[]>) => {
      state = action.payload;
      return state;
    },
    resetShifts: () => {
      return ClientTurnEmptyState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShifts, resetShifts } = completedShifts.actions;

export default completedShifts.reducer;