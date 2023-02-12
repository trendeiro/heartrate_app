import SelectBox from "../Ui/SelectBox/SelectBox";
import classes from "./SelectGroup.module.css";
function SelectGroup({ groupOptions, groupDefault,labelText,onchangeEvent }) {
  const onChangeMinHandle = (e) => {
    console.log(e)
    onchangeEvent(e,"min")
  }
  const onChangeMaxHandle = (e) => {
    onchangeEvent(e,"max")
  }
  return (
    <div className={classes.selectGroupSection}>
      <label>{labelText}</label>
      <div className={classes.selectGroup}>
        <SelectBox
          id={"minMin"}
          options={groupOptions}
          defaultVal={parseInt(groupDefault.min)}
          onChangeEvent={onChangeMinHandle}

        />
        <span>To</span>
        <SelectBox
          id={"minMax"}
          options={groupOptions}
          defaultVal={groupDefault.max}
          onChangeEvent={onChangeMaxHandle}
        />
      </div>
    </div>
  );
}

export default SelectGroup;
