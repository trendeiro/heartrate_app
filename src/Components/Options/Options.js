import {  useSelector } from "react-redux";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

import classes from "./Options.module.css";
function Options() {
  const chartStatus = useSelector((state) => state.chart.showChart);
  const tableStatus = useSelector((state) => state.table.showTable);

  const optionStyle = [
    classes.singleOption,
    (chartStatus || tableStatus) && classes.optionsSection,
  ];
 
  /**
   * small piece of html only to be shown when table is up
   */

  /* const showSortOpt = tableStatus && (
    <div className={classes.tblOpt}>
      <SortGroup />
      
    </div>
  ); */

  return (
    <div className={optionStyle.join(" ")}>
      <ButtonGroup />
    </div>
  );
}

export default Options;
