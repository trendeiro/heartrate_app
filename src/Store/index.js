import { configureStore } from "@reduxjs/toolkit";
import chartSlice from "./slice/chart/chart-slice";
import tableSlice from "./slice/table/table-slice";

const store = configureStore({
  reducer: {
    chart: chartSlice.reducer,
    table: tableSlice.reducer,
  },
});

export default store;
