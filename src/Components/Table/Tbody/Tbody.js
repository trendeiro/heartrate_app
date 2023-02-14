import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import classes from "./Tbody.module.css";

const Tbody = ({ data }) => {
  const dispatch = useDispatch();
  const tbody = useRef();

  const tblBody = data.map((ele, index) => {
    return (
      <tr key={index}>
        <td>{ele.dateTime}</td>
        <td>{ele.minimum}</td>
        <td>{ele.maximum}</td>
        <td>{ele.meanAverage}</td>
      </tr>
    );
  });

  return (
    <tbody ref={tbody} className={classes.tbody}>
      {tblBody}
    </tbody>
  );
};

export default Tbody;
