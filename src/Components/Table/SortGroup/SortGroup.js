import SelectBox from "../../Ui/SelectBox/SelectBox";
import classes from "./SortGroup.module.css";

function SortGroup({ groupOptions, groupDefault, labelText, onchangeEvent }) {
  return (
    <div className={classes.selectGroupSection}>
      <label>Sort By</label>
      <div className={classes.selectGroup}>
        <SelectBox
          id={"type"}
          options={["Min", "Max", "Average", "Date"]}
          defaultVal={"Date"}
          /* onChangeEvent={onChangeMinHandle}*/
          error={false}
        />
        <SelectBox
          id={"order"}
          options={["desc", "asc"]}
          defaultVal={"desc"}
          // onChangeEvent={onChangeMaxHandle}
          error={false}
        />
      </div>
    </div>
  );
}

export default SortGroup;
