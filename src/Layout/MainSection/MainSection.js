import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Options from "../../Components/Options/Options";
import Card from "../../Components/Ui/Card/Card";
import SelectBox from "../../Components/Ui/SelectBox/SelectBox";
import Warning from "../../Components/Warining/Warning";
import ChartSection from "../ChartSection/ChartSection";
import TableSection from "../TableSection/TableSection";
import classes from "./MainSection.module.css";

function MainSection({ error, isLoading }) {
  const [connected, setConnected] = useState(navigator.onLine);

  const chartStatus = useSelector((state) => state.chart.showChart);
  const tableStatus = useSelector((state) => state.table.showTable);

  useEffect(() => {
    const handleIntCon = () => {
      setConnected(navigator.onLine);
    };

    window.addEventListener("online", handleIntCon);
    window.addEventListener("offline", handleIntCon);

    return () => {
      window.removeEventListener("online", handleIntCon);
      window.removeEventListener("offline", handleIntCon);
    };
  }, [connected]);

  /**
   * Function to verify what to show
   *
   * @returns Component to be shown
   */

  const dataSection = () => {
    if (isLoading) {
      return <Warning text={"is loading"} subText={false} />;
    }
    if (!isLoading && !tableStatus && chartStatus) {
      return <ChartSection />;
    }
    if (!isLoading && !chartStatus && tableStatus) {
      return <TableSection />;
    }
    if (!isLoading && !chartStatus && !tableStatus) {
      if (!connected) {
        return (
          <Warning
            text={"Lost internet connectivity!"}
            subText={"Check your internet status and refresh the page."}
          />
        );
      }
      if (error) {
        return (
          <Warning
            text={"Something went worng!"}
            subText={"Check your internet status and refresh the page."}
          />
        );
      }
      return (
        <Warning
          text={
            "Please choose a way to see the data by clicking on one of the buttons inthe right coner!"
          }
          subText={false}
        />
      );
    }
  };

  const displayTitle = () => {
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
      <Card>
        <h2 className={classes.main__title}>{displayTitle()} heart beat</h2>
        <div className={classes.main__section}>
          <div className={classes.main__btnSection}>
            <Options />
          </div>
          <div className={classes.main__showDataSection}>
            {dataSection()}
            <div className={classes.footer_table}></div>
          </div>
        </div>
      </Card>
    </main>
  );
}

export default MainSection;
