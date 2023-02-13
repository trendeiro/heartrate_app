import { useSelector } from "react-redux";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Filters from "../Filters/Filters";
import classes from "./Options.module.css";
function Options() {
  const chartStatus = useSelector((state) => state.chart.showChart);

  const optionStyle = [
    classes.singleOption,
    chartStatus && classes.optionsSection,
  ];

  return (
    <div className={optionStyle.join(" ")}>
      {chartStatus && <Filters />}

      <ButtonGroup />
    </div>
  );
}

export default Options;
