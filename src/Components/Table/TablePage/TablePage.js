import Button from "../../Ui/Buttons/Button";
import classes from "./TablePage.module.css";
function TablePage() {
  const onGoBackHandle = () => {};
  const onPrevHandle = () => {};
  const onNextkHandle = () => {};
  const onGoNextHandle = () => {};

  return (
    <div className={classes.pageContainer}>
      <lable>Page</lable>
      <div className={classes.btnPage}>
        <Button
          key={"goBAck"}
          text={"<"}
          style={[classes.btnPageLayout, classes.btnMovePage]}
          onClickHandle={onGoBackHandle}
        />
        <Button
          key={"prev"}
          text={"1"}
          style={[classes.btnPageLayout, classes.btnMovePage, classes.btnPrev]}
          onClickHandle={onPrevHandle}
        />
        <Button
          key={"act"}
          text={"2"}
          style={[classes.btnPageLayout, classes.btnMovePage]}
        />
        <Button
          key={"next"}
          text={"3"}
          style={[classes.btnPageLayout, classes.btnMovePage, classes.btnNext]}
          onClickHandle={onNextkHandle}
        />
        <Button
          key={"goNext"}
          text={">"}
          style={[classes.btnPageLayout, classes.btnMovePage]}
          onClickHandle={onGoNextHandle}
        />
      </div>
    </div>
  );
}

export default TablePage;
