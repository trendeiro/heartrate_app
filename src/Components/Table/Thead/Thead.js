import classes from "./Thead.module.css";
const Thead = ({ headers }) => {
  const header = (
    <tr>
      {headers.map((ele, index) => {
        return <th key={index}>{ele}</th>;
      })}
    </tr>
  );

  return <thead className={classes.thead}>{header}</thead>;
};

export default Thead;
