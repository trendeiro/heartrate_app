import { useSelector } from "react-redux";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Filters from "../Filters/Filters";
import classes from "./Options.module.css";
function Options() {
  const chartStatus = useSelector((state) => state.chart.showChart);
  const tableStatus = useSelector((state) => state.chart.showTable);

  const optionStyle = [
    classes.singleOption,
    chartStatus || tableStatus && classes.optionsSection,
  ];

  return (
    <div className={optionStyle.join(" ")}>
      {chartStatus || tableStatus && <Filters />}

      <ButtonGroup />
    </div>
  );
}

export default Options;
