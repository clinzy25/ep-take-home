import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './pokemonService';
import appReducer from './slice';
import logger from 'redux-logger';

const middlewares = [pokemonApi.middleware, logger]

export const store = configureStore({
  reducer: {
    // Redux
    app: appReducer,
    // Services
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
