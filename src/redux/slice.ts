import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  gender: {
    user: string;
    target: string;
  };
  pokemon: [];
  offset: 0;
}

const initialState: AppState = {
  gender: {
    user: 'male',
    target: 'female'
  },
  pokemon: [],
  offset: 0
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGender(state, action) {
      const { payload } = action;
      state.gender = payload;
    },
    setPokemon(state, action) {
      const { payload } = action;
      state.pokemon = { ...state.pokemon, ...payload };
    }
  }
});

// Action creators are generated for each case reducer function
export const { setGender } = appSlice.actions;

export default appSlice.reducer;
