import { useDispatch, useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import TablePage from "../../Components/Table/TablePage/TablePage";
import SelectBox from "../../Components/Ui/SelectBox/SelectBox";
import { tableActions } from "../../Store/slice/table/table-slice";
import FilterSection from "../FilterSection/FilterSection";
import classes from "./TableSection.module.css";

function TableSection() {
  const tableStatus = useSelector((state) => state.table.showTable);
  const actualRowNum = useSelector((state) => state.table.tblDisplaySet.rowNum);
  const dispatch = useDispatch();
  const numRowPoss = [5, 10, 15];

  const onChangeRowNumHandle = (e) => {
    dispatch(tableActions.changeRowNum(e.target.value));
  };
  const rowNum = tableStatus && (
    <div className={classes.rowNum}>
      <label>Row Number</label>
      <SelectBox
        options={numRowPoss}
        defaultVal={actualRowNum}
        onChangeEvent={onChangeRowNumHandle}
      />
    </div>
  );

  return (
    <section className={classes.tableSection}>
      <FilterSection />
      <Table />
      <div className={classes.tableFooter}>
        {rowNum}

        {tableStatus && <TablePage />}
      </div>
    </section>
  );
}

export default TableSection;
