import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPokemon } from 'pokeapi-typescript';
import { pokemonApi } from './pokemonService';

export interface AppState {
  gender: {
    user: string;
    target: string;
  };
  likes: IPokemon[];
  dislikes: IPokemon[];
}

const initialState: AppState = {
  gender: {
    user: 'male',
    target: 'female'
  },
  likes: [],
  dislikes: []
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGender(state, action) {
      const { payload } = action;
      state.gender = payload;
    },
    setLikes(state, action) {
      const {
        payload: { pokemon, liked }
      } = action;
      if (liked) {
        state.likes = [...state.likes, pokemon];
      } else {
        state.dislikes = [...state.dislikes, pokemon];
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { setGender, setLikes } = appSlice.actions;

export default appSlice.reducer;
