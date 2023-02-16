const { createSlice } = require("@reduxjs/toolkit");

const tableSlice = createSlice({
  name: "table",
  initialState: {
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
    changeRowNum(state, action) {
      state.tblDisplaySet.rowNum = action.payload;
    },
    showTable(state, action) {
      state.showTable = action.payload;
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
    ChangePage(state, action) {
      state.tblDisplaySet.pages.prev = action.payload.prev;
      state.tblDisplaySet.pages.next = action.payload.next;
      state.tblDisplaySet.pages.act = action.payload.act;
    },
  },
});

export const tableActions = tableSlice.actions;

export default tableSlice;
