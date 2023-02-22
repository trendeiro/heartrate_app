import { useDispatch, useSelector } from "react-redux";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import SortGroup from "../Table/SortGroup/SortGroup";
import SelectBox from "../Ui/SelectBox/SelectBox";

import Filters from "../Filters/Filters";
import classes from "./Options.module.css";
import { tableActions } from "../../Store/slice/table/table-slice";
function Options() {
  const numRowPoss = [5, 10, 15];
  const dispatch = useDispatch();
  const actualRowNum = useSelector((state) => state.table.tblDisplaySet.rowNum);
  const chartStatus = useSelector((state) => state.chart.showChart);
  const tableStatus = useSelector((state) => state.table.showTable);

  const optionStyle = [
    classes.singleOption,
    (chartStatus || tableStatus) && classes.optionsSection,
  ];
  const onChangeRowNumHandle = (e) => {
    dispatch(tableActions.changeRowNum(e.target.value));
  };

  /**
   * small piece of html only to be shown when table is up
   */

  const showSortOpt = tableStatus && (
    <div className={classes.tblOpt}>
      <SortGroup />
      <div className={classes.rowNum}>
        <label>Row Number</label>
        <SelectBox
          options={numRowPoss}
          defaultVal={actualRowNum}
          onChangeEvent={onChangeRowNumHandle}
        />
      </div>
    </div>
  );

  return (
    <div className={optionStyle.join(" ")}>
      <ButtonGroup />
    </div>
  );
}

export default Options;
