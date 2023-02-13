import React, { useState } from "react";
import { findIniFilters } from "../js/bdDataManage";

const TableContext = React.createContext({
  showTable: false,
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
  sortedBy: {
    type: "min",
    order: "desc",
  },
  changeFilters: (data) => {},
});

const setFilters = (data) => {
  const initFilters = findIniFilters(data);
  return {
    filterOpt: initFilters,
  };
};

const tableSortedBy = (data) => {};

export const TableContextProvider = (props) => {
  const contextValue = {
    changeFilters: teste1,
  };

  return (
    <TableContext.Provider value={contextValue}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContext;
