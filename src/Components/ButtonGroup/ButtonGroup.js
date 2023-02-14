import { useDispatch, useSelector } from "react-redux";
import { chartActions } from "../../Store/slice/chart/chart-slice";
import Button from "../Ui/Buttons/Button";
import classes from "./ButtonGroup.module.css";

function ButtonGroup() {
  const dispatch = useDispatch();
  const chartStatus = useSelector((state) => state.chart.showChart);
  const showTable = useSelector((state) => state.chart.showTable);

  const onClickChartHandle = () => {
    dispatch(chartActions.showChart(!chartStatus));
    dispatch(chartActions.showTable(false));

    dispatch(chartActions.setFilter());
  };
  const onClickTabletHandle = () => {
    dispatch(chartActions.showChart(false));
    dispatch(chartActions.showTable(!showTable));
    dispatch(chartActions.setFilter());
  };
  return (
    <div className={classes.buttonSection}>
      <Button
        key={1}
        text={"Chart"}
        onClickHandle={onClickChartHandle}
        active={chartStatus}
      />

      <Button
        key={2}
        text={"Table"}
        onClickHandle={onClickTabletHandle}
        active={showTable}
      />
    </div>
  );
}

export default ButtonGroup;
