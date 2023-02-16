import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import SortGroup from "../Table/SortGroup/SortGroup";
import TablePage from "../Table/TablePage/TablePage";
import SelectBox from "../Ui/SelectBox/SelectBox";

import Filters from "../Filters/Filters";
import classes from "./Options.module.css";
import { chartActions } from "../../Store/slice/chart/chart-slice";
function Options() {
  const [numRowPoss, setNumRowPoss] = useState([5, 10, 15]);
  const dispatch = useDispatch();
  const actualRowNum = useSelector((state) => state.chart.tblDisplaySet.rowNum);
  const chartStatus = useSelector((state) => state.chart.showChart);
  const tableStatus = useSelector((state) => state.chart.showTable);

  const optionStyle = [
    classes.singleOption,
    (chartStatus || tableStatus) && classes.optionsSection,
  ];
  const onChangeRowNumHandle = (e) => {
    dispatch(chartActions.changeRowNum(e.target.value))
  }

 
  const showSortOpt = tableStatus && (
    <div className={classes.tblOpt}>
      <SortGroup />
      <TablePage />
      <div>
        <label>Row Number</label>
        <SelectBox options={numRowPoss} defaultVal={actualRowNum} onChangeEvent={onChangeRowNumHandle} />
      </div>
    </div>
  );

  return (
    <div className={optionStyle.join(" ")}>
      {(chartStatus || tableStatus) && <Filters tblOpt={tableStatus} />}
      {showSortOpt}

      <ButtonGroup />
    </div>
  );
}

export default Options;
