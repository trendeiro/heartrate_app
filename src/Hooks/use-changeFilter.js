import { useDispatch } from "react-redux";
import { chartActions } from "../Store/slice/chart/chart-slice";

const useChangeFilters = () => {
  const dispatch = useDispatch();

  const updateFilter = (beat, type, e) => {
    dispatch(
      chartActions.changeFilterOpt({
        beat: beat,
        type: type,
        value: e.target.value,
      })
    );
  };

  const updateSort = (type, e) => {
    dispatch(
      chartActions.changeSort({
        type: type,
        order: e.target.value,
      })
    );
  };

  return {
    updateFilter,
    updateSort,
  };
};

export default useChangeFilters;
