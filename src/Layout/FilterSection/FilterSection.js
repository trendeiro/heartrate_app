import classes from "./FilterSection.module.css";
import Button from "../../Components/Ui/Buttons/Button";
import { useEffect, useState } from "react";
import Filter from "../../Components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { chartActions } from "../../Store/slice/chart/chart-slice";
function FilterSection(params) {
  const [showFilter, setShowFilter] = useState(false);
  const filterOpt = useSelector((state) => state.chart.filterOpt);
  const dispatch = useDispatch();
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

  useEffect(() => {
    setDefault(filterOpt);
  }, []);

  const onClickFilterHandle = () => {
    setShowFilter((prev) => !prev);
  };

  const cssDivFilters = [
    classes.filtersHide,
    showFilter && classes.showFilters,
  ];

  const onClickShowFilterType = (type, showFilter) => {
    console.log(type)
    dispatch(chartActions.showFilters({type, showFilter}));
  };

  const filters = (
    <div className={cssDivFilters.join(" ")}>
      <Filter
        key={"filter1"}
        text={"Minimum Beat"}
        beat={"min"}
        defaultVal={defaultsValue.min}
        showFilter={filterOpt.min.show}
        onClickShowFilter={onClickShowFilterType}
      />
      <Filter
        key={"filter2"}
        text={"Maximum Beat"}
        beat={"max"}
        defaultVal={defaultsValue.max}
        showFilter={filterOpt.max.show}
        onClickShowFilter={onClickShowFilterType}
      />
      <Filter
        key={"filter3"}
        text={"Average Beat"}
        beat={"ave"}
        defaultVal={defaultsValue.ave}
        showFilter={filterOpt.ave.show}
        onClickShowFilter={onClickShowFilterType}
      />
    </div>
  );

  return (
    <div className={classes.filterSection}>
      <Button
        onClickHandle={onClickFilterHandle}
        style={[classes.btnFilter]}
        text={"Filter"}
      />
      {filters}
    </div>
  );
}

export default FilterSection;
