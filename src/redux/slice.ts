import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  gender: {
    user: string;
    target: string;
  };
}

const initialState: AppState = {
  gender: {
    user: '',
    target: ''
  }
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGender(state, action) {
      const { payload } = action;
      state.gender = payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setGender } = appSlice.actions;

export default appSlice.reducer;
