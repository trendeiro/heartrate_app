import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./App.module.css";
import useGetData from "./Hooks/use-getData";
import { parseValue } from "./js/bdDataManage";
import Header from "./Layout/Header/Header";
import MainSection from "./Layout/MainSection/MainSection";
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
      <Header/>
      <div className={classes.mainContainer}>
        <MainSection error={error} isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default App;
