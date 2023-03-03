import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPokemon } from 'pokeapi-typescript';

export interface AppState {
  app: any;
  gender: {
    user: string;
    target: string;
  };
  likes: IPokemon[];
  dislikes: IPokemon[];
  matches: IPokemon[];
  matchCondition: {
    key: string;
    value: any;
  };
}

const initialState: AppState = {
  gender: {
    user: 'male',
    target: 'female'
  },
  likes: [],
  dislikes: [],
  matches: [],
  matchCondition: {
    key: 'weight',
    value: 60
  }
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGender(state, action: PayloadAction<AppState['gender']>) {
      state.gender = action.payload;
    },
    setLikes(state, action: PayloadAction<{ pokemon: IPokemon; liked: number }>) {
      const {
        payload: { pokemon, liked }
      } = action;
      if (liked) {
        state.likes = [...state.likes, pokemon];
      } else {
        state.dislikes = [...state.dislikes, pokemon];
      }
      if (pokemon[state.matchCondition.key] > state.matchCondition.value && liked) {
        state.matches = [...state.matches, pokemon];
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { setGender, setLikes } = appSlice.actions;

export default appSlice.reducer;
