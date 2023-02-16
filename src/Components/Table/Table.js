import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupDataToDisplay } from "./js/TableFunction";
import Tbody from "./Tbody/Tbody";
import Thead from "./Thead/Thead";
import classes from "./Table.module.css";
import { chartActions } from "../../Store/slice/chart/chart-slice";
function Table() {
  const dispatch = useDispatch();
  const table = useRef();
  const data = useSelector((state) => state.chart.data);
  const filters = useSelector((state) => state.chart.filterOpt);
  const settingsTbl = useSelector((state) => state.chart.tblDisplaySet);
  const [tableIndex, setTableIndex] = useState(0);

  const [bodyData, setBodyData] = useState([[]]);
  const headers = ["Date", "Minimum", "Maximum", "Average"];

  useEffect(() => {
    setTableIndex(0);
  }, []);

  
  useEffect(() => {
    const arrangedData = setupDataToDisplay({
      data: data,
      rowNum: settingsTbl.rowNum,
      order: settingsTbl.sort,
      filters: filters,
    });
    dispatch(chartActions.changePagesTotal(arrangedData.dataToDisplay.length))
    setBodyData(arrangedData.dataToDisplay);
  }, [data, settingsTbl.rowNum,settingsTbl.sort, filters,dispatch]);

  useEffect(()=>{
    setTableIndex(settingsTbl.pages.act-1);
  },[settingsTbl.pages.act])

  return (
    <table ref={table} className={classes.table}>
      <Thead headers={headers} />
      <Tbody data={bodyData[tableIndex]} />
    </table>
  );
}

export default Table;
