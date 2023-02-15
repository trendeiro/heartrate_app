import classes from "./Button.module.css";

function Button({ text, onClickHandle, style }) {
  const buttonStyle = [classes.button, ...style];

  return (
    <>
      <button className={buttonStyle.join(" ")} onClick={onClickHandle}>
        {text}
      </button>
    </>
  );
}

export default Button;
