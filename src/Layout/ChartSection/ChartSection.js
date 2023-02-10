import { useSelector } from "react-redux";
import Canvas from "../../Components/Canvas/Canvas";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import 

function ChartSection({ error, isLoading }) {
  const data = useSelector((state) => state.chart.data);

  console.log(data);
  console.log(error);
  console.log(isLoading);

  return (
    <section className={classes.chartSection}>
      <div>
        <ButtonGroup />
      </div>
      <div className={classes.}>
        <Canvas />
      </div>
    </section>
  );
}

export default ChartSection;
