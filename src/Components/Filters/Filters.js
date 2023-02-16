import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useChangeFilters from "../../Hooks/use-changeFilter";
import SelectGroup from "../SelectGroup/SelectGroup";
import classes from "./Filters.module.css";
function Filters({ tblOpt }) {
  const { updateFilter } = useChangeFilters();
  const [defaultsValue, setDefault] = useState({
    min: {
      min: null,
      max: null,
    },
    max: {
      min: null,
      max: null,
    },
    ave: {
      min: null,
      max: null,
    },
  });

  const [dataForOptions, setDataForOptions] = useState({
    min: [],
    max: [],
    ave: [],
  });

  const data = useSelector((state) => state.chart.data);
  const filterOpt = useSelector((state) => state.chart.filterOpt);

  /**
   *
   * useEffect to retrive default values
   *
   */

  useEffect(() => {
    const min = [];
    const max = [];
    const ave = [];
    data.forEach((element) => {
      min.push(element.minimum);
      max.push(element.maximum);
      ave.push(element.meanAverage);
    });
    setDataForOptions({
      min: min,
      max: max,
      ave: ave,
    });
  }, [data]);

  useEffect(() => {
    setDefault(filterOpt);
  }, [filterOpt]);

  const onChangeMinHandle = (e, type) => {
    updateFilter("min", type, e);
  };
  const onChangeMaxHandle = (e, type) => {
    updateFilter("max", type, e);
  };
  const onChangeAveHandle = (e, type) => {
    updateFilter("ave", type, e);
  };

  return (
    <div className={classes.selectSection}>
      <SelectGroup
        groupOptions={dataForOptions.min}
        groupDefault={defaultsValue.min}
        labelText={"Minimum beat"}
        onchangeEvent={onChangeMinHandle}
      />
      <SelectGroup
        groupOptions={dataForOptions.max}
        groupDefault={defaultsValue.max}
        labelText={"Maximum beat"}
        onchangeEvent={onChangeMaxHandle}
      />
      <SelectGroup
        groupOptions={dataForOptions.ave}
        groupDefault={defaultsValue.ave}
        labelText={"Average beat"}
        onchangeEvent={onChangeAveHandle}
      />
    </div>
  );
}

export default Filters;
