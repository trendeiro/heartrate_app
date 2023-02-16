import { useDispatch } from "react-redux";
import { tableActions } from "../../../Store/slice/table/table-slice";
import SelectBox from "../../Ui/SelectBox/SelectBox";
import classes from "./SortGroup.module.css";

function SortGroup() {
  const dispatch = useDispatch();

  const handleChangeType = (e) => {
    dispatch(tableActions.changeSortType(e.target.value));
  };

  const handleChangeOrder = (e) => {
    dispatch(tableActions.changeSortOrder(e.target.value));
  };

  return (
    <div className={classes.selectGroupSection}>
      <label>Sort By</label>
      <div className={classes.selectGroup}>
        <SelectBox
          id={"type"}
          options={["Min", "Max", "Average", "Date"]}
          defaultVal={"Date"}
          onChangeEvent={handleChangeType}
          error={false}
        />
        <SelectBox
          id={"order"}
          options={["Desc", "Asc"]}
          defaultVal={"Desc"}
          onChangeEvent={handleChangeOrder}
          error={false}
        />
      </div>
    </div>
  );
}

export default SortGroup;
