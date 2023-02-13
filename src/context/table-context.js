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
  changeShowTable: () => {},
});




export const TableContextProvider = (props) => {
  const [showTable, setShowTable] = useState(false);
  const [filterOpt, setFilterOpt] = useState(null)

  const showTableHandler = (show) => {
    setShowTable(show);
  };
  const setFilters = (data) => {
    const initFilters = findIniFilters(data);
    setFilterOpt(initFilters);
  };

  const contextValue = {
    changeFilters: setFilters,
    changeShowTable:showTableHandler,
    showTable:showTable,
    filterOpt:filterOpt,
  };

  return (
    <TableContext.Provider value={contextValue}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContext;
