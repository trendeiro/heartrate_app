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
    console.log(beat)
    dispatch(
      chartActions.changeFilterOpt({
        beat: beat,
        type: type,
        value: e,
      })
    );
  };

  return {
    updateFilter,
  };
};

export default useChangeFilters;
