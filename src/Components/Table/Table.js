import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findSortedHeader, setupDataToDisplay } from "./js/TableFunction";
import Tbody from "./Tbody/Tbody";
import Thead from "./Thead/Thead";
import classes from "./Table.module.css";
import { tableActions } from "../../Store/slice/table/table-slice";
function Table() {
  const dispatch = useDispatch();
  const table = useRef();
  const data = useSelector((state) => state.chart.data);
  const filters = useSelector((state) => state.chart.filterOpt);
  const settingsTbl = useSelector((state) => state.table.tblDisplaySet);
  const sortData = useSelector((state) => state.table.tblDisplaySet.sort);

  const [tableIndex, setTableIndex] = useState(0);

  const [bodyData, setBodyData] = useState([[]]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    setTableIndex(0);
  }, []);

  /**
   * UseEffect to manage the data to be displayed , change the number of total pages
   */
  console.log(filters)

  useEffect(() => {
    const arrangedData = setupDataToDisplay({
      data: data,
      rowNum: settingsTbl.rowNum,
      order: settingsTbl.sort,
      filters: filters,
    });
    dispatch(tableActions.changePagesTotal(arrangedData.dataToDisplay.length));
    setBodyData(arrangedData.dataToDisplay);
  }, [data, settingsTbl.rowNum, settingsTbl.sort, filters, dispatch]);

  useEffect(() => {
    setTableIndex(settingsTbl.pages.act - 1);
  }, [settingsTbl.pages.act]);

  useEffect(() => {
    const newHeader = findSortedHeader({ sortData });
    setHeaders(newHeader);
  }, [sortData]);

  return (
    <>
      <table ref={table} className={classes.table}>
        <Thead headers={headers} />
        <Tbody data={bodyData[tableIndex]} />
      </table>
    </>
  );
}

export default Table;
