import classes from "./SelectBox.module.css";

function SelectBox({ options, defaultVal, onChangeEvent }) {
  const DataOptions = () => {
    return options.map((options, index) => {
      if (options === defaultVal) {
        return (
          <option key={index} value={options} selected>
            {options}
          </option>
        );
      }
      return (
        <option key={index} value={options}>
          {options}
        </option>
      );
    });
  };

  return (
    <select className={classes.select} onChange={onChangeEvent}>
      {DataOptions()}
    </select>
  );
}

export default SelectBox;
