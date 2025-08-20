
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    increaseCounter: (state) => {
      state.counter += 1;
    },
  },
});

export const { increaseCounter } = mainSlice.actions;
export default mainSlice.reducer;
