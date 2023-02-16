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
      rowNum: 15,
      sort: {
        order: "Desc",
        type: "Date",
      },
      pages: {
        prev: 0,
        act: 1,
        next: 2,
        total: null,
      },
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
    changeRowNum(state, action) {
     
        state.tblDisplaySet.rowNum = action.payload;
      
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
    changeSortType(state, action) {
      state.tblDisplaySet.sort.type = action.payload;
    },
    changeSortOrder(state, action) {
      state.tblDisplaySet.sort.order = action.payload;
    },
    changePagesTotal(state, action) {
      state.tblDisplaySet.pages.total = action.payload;
      state.tblDisplaySet.pages.prev = 0;
      state.tblDisplaySet.pages.next = 2;
      state.tblDisplaySet.pages.act = 1;
    },
    nextPage(state, action) {
      state.tblDisplaySet.pages.prev = action.payload.prev;
      state.tblDisplaySet.pages.next = action.payload.next;
      state.tblDisplaySet.pages.act = action.payload.act;
    },
    prevPage(state, action) {
      state.tblDisplaySet.pages.prev = action.payload.prev;
      state.tblDisplaySet.pages.next = action.payload.next;
      state.tblDisplaySet.pages.act = action.payload.act;
    },
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice;
