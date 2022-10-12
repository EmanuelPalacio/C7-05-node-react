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
    updateFood: (state, action: PayloadAction<Food>) => {
      state = state.map((food) => {
        if (food.foodId === action.payload.foodId) {
          return action.payload;
        }
        return food;
      });
      return state;
    },
    removeFood: (state, action: PayloadAction<Food>) => {
      state = state.filter((food: Food) => food.foodId !== action.payload.foodId);
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFoods, addFood, removeFood, updateFood } = FoodsSlice.actions;

export default FoodsSlice.reducer;
