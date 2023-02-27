import classes from "./InputGroup.module.css";
import Card from "../Ui/Card/Card";
import { useEffect, useState } from "react";

function InputGroup({ onMinChangeHandle, onMaxChangeHandle, defaultVal }) {
  const [min, setMin] = useState(defaultVal.min);
  const [max, setMax] = useState(defaultVal.max);
  const [error, setError] = useState(false)
  useEffect(() => {
    if (min === "") {
      setError(false)

      onMinChangeHandle(defaultVal.min,"min")
      return;
    }
    if(max < min){
      onMinChangeHandle(defaultVal.min,"min")
      
      return;
    }
    setError(false)
    onMinChangeHandle(min,"min");

  }, [min,max,onMinChangeHandle,defaultVal.min]);

  useEffect(() => {
    if (max === "") {
      onMaxChangeHandle(defaultVal.max,"max")
      return;
    }
    if(max < min){
    console.log(max)

      onMaxChangeHandle(defaultVal.max,"max")

      return;
    }
    console.log(max)

    onMaxChangeHandle(max,"max");

  }, [min,max,onMaxChangeHandle,defaultVal.max]);

  const onChangeMinHandle = (e) => {
    setMin(e.target.value);
  };
  const onChangeMaxHandle = (e) => {
    setMax(e.target.value);
  };

  return (
    <div>
      <Card style={classes.inputCard}>
        <label className={classes.inputLabel}>Minimum Beats - Maximum Beats</label>
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
