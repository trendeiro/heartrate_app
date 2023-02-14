import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arrangePagesToDisplay, setupDataToDisplay } from "./js/TableFunction";
import Tbody from "./Tbody/Tbody";
import Thead from "./Thead/Thead";
import classes from "./Table.module.css";
import { chartActions } from "../../Store/slice/chart/chart-slice";
function Table() {
  const dispatch = useDispatch();
  const table = useRef();
  const data = useSelector((state) => state.chart.data);
  const settingsTbl = useSelector((state) => state.chart.settingsTableDisplay);

  const [bodyData, setBodyData] = useState([]);
  const headers = ["Date", "Minimum", "Maximum", "Average"];

  useEffect(() => {
    const arrangedData = setupDataToDisplay(data);
    setBodyData(arrangedData);
    dispatch(
      chartActions.changeSetTblDisplay({
        toChange: "height",
        value: table.current.childNodes[0].offsetHeight,
      })
    );
  }, [data, dispatch]);

  useEffect(() => {
    if (bodyData.length > 0) {
      arrangePagesToDisplay({
        data: bodyData,
        settings: settingsTbl,
      });
    }
  }, [bodyData]);

  return (
    <table ref={table} className={classes.table}>
      <Thead headers={headers} />
      <Tbody data={bodyData} />
    </table>
  );
}

export default Table;
