import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Options from "../../Components/Options/Options";
import { arrangePagesToDisplay } from "../../Components/Table/js/TableFunction";
import { chartActions } from "../../Store/slice/chart/chart-slice";
import ChartSection from "../ChartSection/ChartSection";
import TableSection from "../TableSection/TableSection";
import classes from "./MainSection.module.css";

function MainSection({ error, isLoading }) {
  const dispatch = useDispatch();
  const mainSection = useRef();
  const chartStatus = useSelector((state) => state.chart.showChart);
  const tableStatus = useSelector((state) => state.chart.showTable);
  const tblDisplaySet = useSelector((state) => state.chart.tblDisplaySet);

  const dataSection = () => {
    if (isLoading) {
      return "is loading";
    }
    if (!isLoading && !tableStatus && chartStatus) {
      return <ChartSection />;
    }
    if (!isLoading && !chartStatus && tableStatus) {
      return <TableSection />;
    }
    if (!isLoading && !chartStatus && !tableStatus) {
      return "Please choose a way to see the data by clicking on one of the buttons in the right coner!";
    }
  };

  const displayType = () => {
    if (chartStatus) {
      return "Chart";
    }
    if (tableStatus) {
      return "Table";
    }
    return "";
  };

  return (
    <main className={classes.main}>
      <h2 className={classes.main__title}>{displayType()} heart beat</h2>
      <div className={classes.main__section}>
        <div className={classes.main__btnSection}>
          <Options />
        </div>
        <div ref={mainSection} className={classes.main__showDataSection}>
          {dataSection()}
        </div>
      </div>
    </main>
  );
}

export default MainSection;
