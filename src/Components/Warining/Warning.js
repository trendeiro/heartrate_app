import classes from "./Warning.module.css";

function Warning({ text, subText }) {
  return (
    <div className={classes.note}>
      <span className={classes.noteText}>{text} </span>
      <sapn className={classes.noteSubtext}>{subText && subText}</sapn>
    </div>
  );
}

export default Warning;
