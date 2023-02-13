import { useSelector } from "react-redux";
import Options from "../../Components/Options/Options";
import Table from "../../Components/Table/Table";
import ChartSection from "../ChartSection/ChartSection";
import classes from "./MainSection.module.css";

function MainSection({ error, isLoading }) {
  const chartStatus = useSelector((state) => state.chart.showChart);
  const tableStatus = useSelector((state) => state.chart.showTable);

  const dataSection = () => {
    if (isLoading) {
      return "is loading";
    }
    if (!isLoading && !tableStatus && chartStatus) {
      return <ChartSection />;
    }
    if (!isLoading && !chartStatus && tableStatus) {
      return <Table/>;
    }
    if (!isLoading && !chartStatus && !tableStatus) {
      return "Please choose a way to see the data by clicking on one of the buttons in the right coner!";
    }
  };

  const displayType = chartStatus ? "chart" : "table";

  return (
    <main className={classes.main}>
      <h2 className={classes.main__title}>{displayType} heart beat</h2>
      <div className={classes.main__section}>
        <div className={classes.main__btnSection}>
          <Options />
        </div>
        <div className={classes.main__showDataSection}>{dataSection()}</div>
      </div>
    </main>
  );
}

export default MainSection;
