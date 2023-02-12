import { createSlice } from "@reduxjs/toolkit";
import { findIniFilters } from "../../../js/bdDataManage";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    data: [],
    showChart: false,
    filterOpt:{
      min:{
        min:null,
        max:null,
      },
      max:{
        min:null,
        max:null,
      },
      ave:{
        min:null,
        max:null,
      },
      date:{
        begin:null,
        end:null,
      },
    }
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
    showChart(state, action){
      state.showChart = action.payload;
    }
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice;
