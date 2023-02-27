import { IonIcon } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Thead.module.css";

import { arrowUpOutline, arrowDownOutline } from "ionicons/icons";
import { tableActions } from "../../../Store/slice/table/table-slice";

const Thead = ({ headers }) => {
  const sortData = useSelector((state) => state.table.tblDisplaySet.sort);
  const dispatch = useDispatch();

  const iconArrawUpActive = (
    <IonIcon className={classes.iconActive} icon={arrowUpOutline}></IonIcon>
  );
  const iconArrawDonwActive = (
    <IonIcon className={classes.iconActive} icon={arrowDownOutline}></IonIcon>
  );
  const iconArrawDonwNotActive = (
    <IonIcon
      className={classes.iconNotActive}
      icon={arrowDownOutline}
    ></IonIcon>
  );

  const onClickOnActive = () => {
    dispatch(tableActions.changeSortOrder(!sortData.desc));
  };

  const onClickToBeActive = (type) => {
    dispatch(tableActions.changeSortType(type));
  };

  const sorteBtnActive = (
    <div className={classes.btnIcon} onClick={onClickOnActive}>
      {sortData.desc ? iconArrawDonwActive : iconArrawUpActive}
    </div>
  );

  const sortBtnNotActive = (type) => {
   return( <div
      className={classes.btnIcon}
      onClick={() => {
        onClickToBeActive(type);
      }}
    >
      {iconArrawDonwNotActive}
    </div>);
  };

  const header = (
    <tr>
      {headers.map((ele) => {
        if (ele.sorted)
          return (
            <th key={ele.type}>
              {ele.headerText}

              {sorteBtnActive}
            </th>
          );

        return (
          <th key={ele.type}>
            {ele.headerText} {sortBtnNotActive(ele.type)}
          </th>
        );
      })}
    </tr>
  );

  return <thead className={classes.thead}>{header}</thead>;
};

export default Thead;
