import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IThemeState {
  darkMode: boolean;
}

const initialState: IThemeState = {
  darkMode: false,
};

export const counterSlice = createSlice({
  name: "themeToggler",
  initialState,
  reducers: {
    toggleDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = counterSlice.actions;

export default counterSlice.reducer;
