import { useDispatch, useSelector } from "react-redux";
import { chartActions } from "../../../Store/slice/chart/chart-slice";
import Button from "../../Ui/Buttons/Button";
import classes from "./TablePage.module.css";
function TablePage() {
  const dispatch = useDispatch();
  const pagesSettings = useSelector((state) => state.chart.tblDisplaySet.pages);
  const onPrevHandle = () => {
    if (pagesSettings.prev === 0) {
      return;
    }
    dispatch(
      chartActions.prevPage({
        prev: pagesSettings.prev - 1,
        act: pagesSettings.act - 1,
        next: pagesSettings.next - 1,
      })
    );
  };
  const onNextkHandle = () => {
    if (pagesSettings.act === pagesSettings.total) {
      return;
    }
    dispatch(
      chartActions.prevPage({
        prev: pagesSettings.prev + 1,
        act: pagesSettings.act + 1,
        next: pagesSettings.next + 1,
      })
    );
  };

  return (
    <div className={classes.pageContainer}>
      <label>Page</label>
      <div className={classes.btnPage}>
        <Button
          key={"goBAck"}
          text={"<"}
          style={[classes.btnPageLayout, classes.btnMovePage]}
          onClickHandle={onPrevHandle}
        />
        <Button
          key={"prev"}
          text={pagesSettings.prev === 0 ? "" : pagesSettings.prev}
          style={[classes.btnPageLayout, classes.btnMovePage, classes.btnPrev]}
          onClickHandle={onPrevHandle}
        />
        <Button
          key={"act"}
          text={pagesSettings.act}
          style={[classes.btnPageLayout, classes.btnMovePage]}
        />
        <Button
          key={"next"}
          text={
            pagesSettings.act === pagesSettings.total ? "" : pagesSettings.next
          }
          style={[classes.btnPageLayout, classes.btnMovePage, classes.btnNext]}
          onClickHandle={onNextkHandle}
        />
        <Button
          key={"goNext"}
          text={">"}
          style={[classes.btnPageLayout, classes.btnMovePage]}
          onClickHandle={onNextkHandle}
        />
      </div>
    </div>
  );
}

export default TablePage;
