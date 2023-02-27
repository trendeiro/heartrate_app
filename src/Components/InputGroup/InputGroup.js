import classes from "./InputGroup.module.css";
import Card from "../Ui/Card/Card";
import { useEffect, useState } from "react";

function InputGroup({
  style,
  onMinChangeHandle,
  onMaxChangeHandle,
  filterVAlues,
  defaultVal,
}) {
  const [min, setMin] = useState(filterVAlues.min);
  const [max, setMax] = useState(filterVAlues.max);

  useEffect(() => {
    if (min === "") {
      onMinChangeHandle(defaultVal.min, "min");
      return;
    }
    if (max < min) {
      onMinChangeHandle(defaultVal.min, "min");

      return;
    }
    onMinChangeHandle(min, "min");
  }, [min, max, onMinChangeHandle, defaultVal.min]);

  useEffect(() => {
    if (max === "") {
      onMaxChangeHandle(defaultVal.max, "max");
      return;
    }
    if (max < min) {
      onMaxChangeHandle(defaultVal.max, "max");

      return;
    }

    onMaxChangeHandle(max, "max");
  }, [min, max, onMaxChangeHandle, defaultVal.max]);

  const onChangeMinHandle = (e) => {
    setMin(e.target.value);
  };
  const onChangeMaxHandle = (e) => {
    setMax(e.target.value);
  };

  const cardCss = [classes.inputCard, ...style];

  return (
    <div>
      <Card style={cardCss.join(" ")}>
        <label className={classes.inputLabel}>
          Minimum Beats - Maximum Beats
        </label>
        <div className={classes.inputsSection}>
          <input
            className={classes.input}
            placeholder={`Minimum value is ${defaultVal.min}`}
            value={min}
            onChange={(e) => onChangeMinHandle(e)}
            onInput={(e) => {
              return (e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*)\./g, "$1"));
            }}
          />
          -
          <input
            className={classes.input}
            placeholder={`Maximum value is ${defaultVal.max}`}
            value={max}
            onChange={(e) => onChangeMaxHandle(e)}
            onInput={(e) => {
              return (e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*)\./g, "$1"));
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default InputGroup;
