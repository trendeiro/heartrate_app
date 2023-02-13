import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableContext from "../../context/table-context";
import { chartActions } from "../../Store/slice/chart/chart-slice";
import Button from "../Ui/Buttons/Button";
import classes from "./ButtonGroup.module.css";

function ButtonGroup() {
  const dispatch = useDispatch();
  const chartStatus = useSelector((state) => state.chart.showChart);
  const tblCtx = useContext(TableContext);
  const onClickChartHandle = () => {
    dispatch(chartActions.showChart(!chartStatus));
    dispatch(chartActions.setFilter());
  };
  const onClickTabletHandle = () => {
    dispatch(chartActions.showChart(false));
    tblCtx.teste();
  };

  return (
    <div className={classes.buttonSection}>
      <Button
        key={1}
        text={"Chart"}
        onClickHandle={onClickChartHandle}
        active={chartStatus}
      />
      <Button key={2} text={"Table"} onClickHandle={onClickTabletHandle} />
    </div>
  );
}

export default ButtonGroup;
