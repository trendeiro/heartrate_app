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
        show: false,
      },
      max: {
        min: null,
        max: null,
        show: false,
      },
      ave: {
        min: null,
        max: null,
        show: false,
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
    showFilters(state, action) {
      if (action.payload.type === "min") {
        state.filterOpt.min.show = action.payload.showFilter;
        state.filterOpt.max.show = false;
        state.filterOpt.ave.show = false;
        return;
      }
      if (action.payload.type === "max") {
        state.filterOpt.max.show = action.payload.showFilter;
        state.filterOpt.min.show = false;
        state.filterOpt.ave.show = false;

        return;
      }
      if (action.payload.type === "ave") {
        state.filterOpt.ave.show = action.payload.showFilter;
        state.filterOpt.max.show = false;
        state.filterOpt.min.show = false;

        return;
      }
    },

    changeFilterOpt(state, action) {
      console.log(action)

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
