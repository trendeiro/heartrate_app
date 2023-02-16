import { createSlice } from "@reduxjs/toolkit";
import { findIniFilters } from "../../../js/bdDataManage";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    data: [],
    filterOpt: {
      min: {
        min: null,
        max: null,
      },
      max: {
        min: null,
        max: null,
      },
      ave: {
        min: null,
        max: null,
      },
      date: {
        begin: null,
        end: null,
      },
    },
    showChart: false,
  },
  reducers: {
    getData(state, action) {
      state.data = action.payload;
      const initFilters = findIniFilters(action.payload);
      state.filterOpt = initFilters;
    },
    setFilter(state, action) {
      const initFilters = findIniFilters(state.data);
      state.filterOpt = initFilters;
    },
    showChart(state, action) {
      state.showChart = action.payload;
    },

    changeFilterOpt(state, action) {
      if (action.payload.beat === "min") {
        if (action.payload.type === "min") {
          state.filterOpt.min.min = action.payload.value;
          return;
        }
        state.filterOpt.min.max = action.payload.value;
        return;
      }
      if (action.payload.beat === "max") {
        if (action.payload.type === "min") {
          state.filterOpt.max.min = action.payload.value;
          return;
        }
        state.filterOpt.max.max = action.payload.value;
        return;
      }
      if (action.payload.beat === "ave") {
        if (action.payload.type === "min") {
          state.filterOpt.ave.min = action.payload.value;
          return;
        }
        state.filterOpt.ave.max = action.payload.value;
        return;
      }
    },
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice;
