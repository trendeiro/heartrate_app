import { useSelector } from "react-redux";
import Chart from "../../Components/Chart/Chart";
import classes from "./ChartSection.module.css";

function ChartSection() {
  const data = useSelector((state) => state.chart.data);


  return (
    <section className={classes.chartSection}>
       
        <Chart data={data}/>
    </section>
  );
}

export default ChartSection;
