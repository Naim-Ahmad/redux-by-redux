import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
    incrementValueDynamically: (state, action) => {
      console.log(action);
      state.count = state.count + action.payload.value;
    },
  },
});

export const { increment, decrement, incrementValueDynamically } =
  counterSlice.actions;

export default counterSlice.reducer;
