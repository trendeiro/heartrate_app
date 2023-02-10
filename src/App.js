import classes from "./App.module.scss";
import ChartSection from "./Layout/ChartSection/ChartSection";
import TableSection from "./Layout/TableSection/TableSection";

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.container__chart}>
        <ChartSection />
      </div>
      <div className={classes.container__table}>
        <TableSection />
      </div>
    </div>
  );
}

export default App;
