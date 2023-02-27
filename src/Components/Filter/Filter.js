import { useCallback, useState } from "react";
import classes from "./Filter.module.css";
import InputGroup from "../InputGroup/InputGroup";
import Button from "../Ui/Buttons/Button";
import useChangeFilters from "../../Hooks/use-changeFilter";


function Filter({ text, beat, defaultVal,showFilter, onClickShowFilter }) {
  const { updateFilter } = useChangeFilters();

  const onClickFilterHandle = () => {
    onClickShowFilter(beat,!showFilter)
  };
  const onMinChangeHandle = useCallback(
    (e, type) => {
      updateFilter(beat, type, e);
    },
    [updateFilter, beat]
  );

  const onMaxChangeHandle = useCallback(
    (e, type) => {
      updateFilter(beat, type, e);
    },
    [updateFilter, beat]
  );
  return (
    <div className={classes.btnInputGroup}>
      <Button
        style={[classes.btnFilters]}
        onClickHandle={onClickFilterHandle}
        text={text}
      />
      {showFilter && (
        <InputGroup
          style={[]}
          onMinChangeHandle={onMinChangeHandle}
          onMaxChangeHandle={onMaxChangeHandle}
          defaultVal={defaultVal}
        />
      )}
    </div>
  );
}

export default Filter;
