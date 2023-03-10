import { useDispatch, useSelector } from "react-redux";
import { chartActions } from "../../Store/slice/chart/chart-slice";
import { tableActions } from "../../Store/slice/table/table-slice";
import Button from "../Ui/Buttons/Button";
import classes from "./ButtonGroup.module.css";

function ButtonGroup() {
  const dispatch = useDispatch();
  const chartStatus = useSelector((state) => state.chart.showChart);
  const showTable = useSelector((state) => state.table.showTable);

  const onClickChartHandle = () => {
    dispatch(chartActions.showChart(!chartStatus));
    dispatch(tableActions.showTable(false));

    dispatch(chartActions.setFilter());
  };
  const onClickTabletHandle = () => {
    dispatch(chartActions.showChart(false));
    dispatch(tableActions.showTable(!showTable));
    dispatch(chartActions.setFilter());
  };
  return (
    <div className={classes.buttonSection}>
      <Button
        key={1}
        text={"Chart"}
        onClickHandle={onClickChartHandle}
        style={[chartStatus && classes.buttonActive]}
      />

      <Button
        key={2}
        text={"Table"}
        onClickHandle={onClickTabletHandle}
        style={[showTable && classes.buttonActive]}
      />
    </div>
  );
}

export default ButtonGroup;
