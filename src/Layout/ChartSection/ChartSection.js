import { useSelector } from "react-redux";
import Chart from "../../Components/Chart/Chart";
import FilterSection from "../FilterSection/FilterSection";
import classes from "./ChartSection.module.css";

function ChartSection() {
  const data = useSelector((state) => state.chart.data);
  return (
    <div className={classes.chartSection}>
      <FilterSection />
      <div className={classes.chartOverflow}>
        <section className={classes.chart}>
          <Chart data={data} />
        </section>
      </div>
    </div>
  );
}

export default ChartSection;
