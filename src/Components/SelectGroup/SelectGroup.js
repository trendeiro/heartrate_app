import { useCallback, useEffect, useState } from "react";
import SelectBox from "../Ui/SelectBox/SelectBox";
import classes from "./SelectGroup.module.css";
function SelectGroup({ groupOptions, groupDefault, labelText, onchangeEvent }) {
  const [error, setError] = useState(false);
  const [options, setOptions] = useState([]);

  const onChangeMinHandle = (e) => {
    if (parseInt(e.target.value) > groupDefault.max) {
      setError(true);
      return;
    }
    setError(false);

    onchangeEvent(e, "min");
    return;
  };

  const onChangeMaxHandle = (e) => {
    if (parseInt(e.target.value) < groupDefault.min) {
      setError(true);
      return;
    }
    setError(false);

    onchangeEvent(e, "max");
    return;
  };

  const removeDuplicates = useCallback(() => {
    return groupOptions.filter(
      (item, index) => groupOptions.indexOf(item) === index
    );
  }, [groupOptions]);

  useEffect(() => {
    const uniqueOpt = removeDuplicates();
    const parsedOptions = uniqueOpt.map((options) => parseInt(options));
    const sortedOptions = parsedOptions.sort((first, second) => {
      return first > second ? 1 : -1;
    });

    setOptions(sortedOptions);
  }, [groupOptions, removeDuplicates]);

  const classesSelectBox = [classes.spanError, error && classes.show];

  return (
    <div className={classes.selectGroupSection}>
      <label>{labelText}</label>
      <div className={classes.selectGroup}>
        <SelectBox
          id={"minMin"}
          options={options}
          defaultVal={parseInt(groupDefault.min)}
          onChangeEvent={onChangeMinHandle}
          error={error}
        />
        <span>To</span>
        <SelectBox
          id={"minMax"}
          options={options}
          defaultVal={groupDefault.max}
          onChangeEvent={onChangeMaxHandle}
          error={error}
        />

        <span className={classesSelectBox.join(" ")}>
          Please choose a valid range!
        </span>
      </div>
    </div>
  );
}

export default SelectGroup;
