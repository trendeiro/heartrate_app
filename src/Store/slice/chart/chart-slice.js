import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    data: null,
  },
  reducers: {
    resetState(state, action) {
      state.data = null;
    },
    getData(state, action) {
      state.data = action.payload;
    },
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice;
