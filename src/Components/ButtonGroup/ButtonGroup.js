import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableContext from "../../context/table-context";
import { chartActions } from "../../Store/slice/chart/chart-slice";
import Button from "../Ui/Buttons/Button";
import classes from "./ButtonGroup.module.css";

function ButtonGroup() {
  const dispatch = useDispatch();
  const chartStatus = useSelector((state) => state.chart.showChart);
  const bdData = useSelector((state) => state.chart.data);
  const tblCtx = useContext(TableContext);
  const showTable = tblCtx.showTable;
  const onClickChartHandle = () => {
    dispatch(chartActions.showChart(!chartStatus));
    dispatch(chartActions.setFilter());
  };
  const onClickTabletHandle = () => {
    dispatch(chartActions.showChart(false));
    tblCtx.changeShowTable(!showTable);
    tblCtx.changeFilters(bdData);
  };
  return (
    <div className={classes.buttonSection}>
      <Button
        key={1}
        text={"Chart"}
        onClickHandle={onClickChartHandle}
        active={chartStatus}
      />
        
      <Button key={2} text={"Table"} onClickHandle={onClickTabletHandle} active={showTable}/>
    </div>
  );
}

export default ButtonGroup;
