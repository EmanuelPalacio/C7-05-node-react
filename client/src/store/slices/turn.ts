import { createSlice } from '@reduxjs/toolkit';
import { GenerateTurn } from '../../models/Turn';

const initialState: GenerateTurn = {
  name: '',
  time: undefined,
};

const turn = createSlice({
  name: 'turn',
  initialState,
  reducers: {},
});

export default turn.reducer;
