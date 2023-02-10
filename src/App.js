import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./App.module.scss";
import useGetData from "./Hooks/use-getData";
import ChartSection from "./Layout/ChartSection/ChartSection";
import TableSection from "./Layout/TableSection/TableSection";
import { chartActions } from "./Store/slice/chart/chart-slice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useGetData();

  const getData = useCallback(
    (data) => {
      dispatch(chartActions.getData(data));
    },
    [dispatch]
  );

  useEffect(() => {
    sendRequest(
      {
        url: "/heartrate",
        method: "GET",
        data: null,
      },
      getData
    );
  }, [sendRequest, getData]);

  return (
    <div className={classes.container}>
      <div className={classes.container__chart}>
        <ChartSection error={error} isLoading={isLoading} />
      </div>
      <div className={classes.container__table}>
        <TableSection error={error} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
