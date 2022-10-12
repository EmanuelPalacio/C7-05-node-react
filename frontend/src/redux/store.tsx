import { configureStore } from '@reduxjs/toolkit';
import cashierReducer from './slices/cashierSlice';
import turnsReducer from './slices/turnsSlice';
import clientTurnReducer from './slices/clientTurnSlice';
import foodsReducer from './slices/foodsSlice';

export const store = configureStore({
  reducer: {
    Cashier: cashierReducer,
    Turns: turnsReducer,
    ClientTurn: clientTurnReducer,
    Foods: foodsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
