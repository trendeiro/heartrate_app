import { useDispatch } from "react-redux";
import { chartActions } from "../Store/slice/chart/chart-slice";

/**
 *
 * Costume hook to handle the updates to the filters
 *
 */

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

  return {
    updateFilter,
  };
};

export default useChangeFilters;
