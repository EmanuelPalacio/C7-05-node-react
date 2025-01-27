import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
import turn from './slices/turn';
// ...

export const store = configureStore({
  reducer: {
    user: user,
    turn: turn,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
