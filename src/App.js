import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./App.module.css";
import useGetData from "./Hooks/use-getData";
import Header from "./Layout/Header/Header";
import MainSection from "./Layout/MainSection/MainSection";
import { chartActions } from "./Store/slice/chart/chart-slice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useGetData();

  /**
   *
   * Function to store data
   *
   * @params data
   */
  const getData = useCallback(
    (data) => {
      dispatch(chartActions.getData(data));
    },
    [dispatch]
  );

  /**
   *
   * useEffect to do a request
   *
   */

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
      <Header />
      <div className={classes.mainContainer}>
        <MainSection error={error} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
