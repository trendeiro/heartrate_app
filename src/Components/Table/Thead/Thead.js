import { useSelector } from "react-redux";
import classes from "./Thead.module.css";

const Thead = ({ headers }) => {
  const testeee = useSelector((state) => state.table.tblDisplaySet.sort);
  console.log(classes.teste);
  const teste = (
    <ion-icon className={classes.icon} name="arrow-up-outline"></ion-icon>
  );
  const teste2 = <ion-icon name="arrow-down-outline"></ion-icon>;

  const sorteBtn = (
    <div className={classes.teste}>
      {testeee.order === "Desc" ? teste2 : teste}
    </div>
  );

  const header = (
    <tr>
      {headers.map((ele, index) => {
        if (ele === testeee.type)
          return (
            <th>
              {ele}

              {sorteBtn}
            </th>
          );

        return <th>{ele}</th>;
      })}
    </tr>
  );

  return <thead className={classes.thead}>{header}</thead>;
};

export default Thead;
