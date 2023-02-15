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
    showTable: false,
    tblDisplaySet: {
      rowNum: 10,
      spaceAvaileble: null,
      rowHeight: null,
    },
  },
  reducers: {
    resetState(state, action) {
      state.data = [];
    },
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
    showTable(state, action) {
      state.showTable = action.payload;
    },
    changeSetTblDisplay(state, action) {
      if (action.payload.toChange === "num") {
        state.tblDisplaySet.rowNum = action.payload.value;
      }
      if (action.payload.toChange === "space") {
        state.tblDisplaySet.spaceAvaileble = action.payload.value;
      }
      if (action.payload.toChange === "height") {
        state.tblDisplaySet.rowHeight = action.payload.value;
      }
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
