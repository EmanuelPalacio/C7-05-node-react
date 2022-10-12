import { Food, FoodsEmptyState } from '@/models/foods.type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const FoodsSlice = createSlice({
  name: 'foods',
  initialState: FoodsEmptyState,
  reducers: {
    setFoods: (state, action: PayloadAction<Food[]>) => {
      state = action.payload;
      return state;
    },
    addFood: (state, action: PayloadAction<Food>) => {
      state.push(action.payload);
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFoods, addFood } = FoodsSlice.actions;

export default FoodsSlice.reducer;
