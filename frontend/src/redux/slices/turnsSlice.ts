import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Turn, TurnEmptyState } from '@/models/turns.type';
export const TurnsSlice = createSlice({
  name: 'turns',
  initialState: TurnEmptyState,
  reducers: {
    setTurns: (state, action: PayloadAction<Turn[]>) => {
      state = action.payload;
    },
    addTurn: (state, action: PayloadAction<Turn>) => {
      state.push(action.payload);
    },
    removeTurn: (state, action: PayloadAction<Turn>) => {
      state = state.filter((turn) => turn.turnId !== action.payload.turnId);
      return state;
    },
    updateTurn: (state, action: PayloadAction<Turn>) => {
      state = state.map((turn) => {
        if (turn.turnId === action.payload.turnId) {
          return action.payload;
        }
        return turn;
      });
      return state;
    },
    storageTurns: (state, action: PayloadAction<Turn[]>) => {
      state = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTurn, removeTurn, updateTurn, storageTurns } = TurnsSlice.actions;

export default TurnsSlice.reducer;
