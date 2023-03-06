import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPokemon } from 'pokeapi-typescript';

export interface AppState {
  app: any;
  gender: {
    user: string;
    target: string;
  };
  offset: number;
  likes: IPokemon[];
  dislikes: IPokemon[];
  matches: IPokemon[];
  matchCondition: {
    key: string;
    value: any;
  };
}

const initialState: AppState = {
  app: undefined,
  gender: {
    user: 'male',
    target: 'female'
  },
  offset: 0,
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
    setLikes(state, action: PayloadAction<{ currentPokemon: IPokemon; liked: number }>) {
      const {
        payload: { currentPokemon, liked }
      } = action;
      if (liked !== 0) {
        state.likes = [...state.likes, currentPokemon];
      } else {
        state.dislikes = [...state.dislikes, currentPokemon];
      }

      const isMatch = currentPokemon[state.matchCondition.key as keyof IPokemon] > state.matchCondition.value && liked !== 0;
      if (isMatch) {
        state.matches = [...state.matches, currentPokemon];
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { setGender, setLikes } = appSlice.actions;

export default appSlice.reducer;
