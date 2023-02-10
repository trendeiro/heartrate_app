import { configureStore } from "@reduxjs/toolkit";
import chartSlice from "./slice/chart/chart-slice";

const store = configureStore({
  reducer: {
    chart: chartSlice.reducer,
  },
});

export default store;
