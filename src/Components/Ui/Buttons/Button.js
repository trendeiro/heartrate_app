import classes from "./Button.module.css";

function Button({ text, onClickHandle,active }) {

    const buttonStyle = [
        classes.button,
        active && classes.buttonActive
    ];
    

  return (
    <>
      <button className={buttonStyle.join(" ")} onClick={onClickHandle}>{text}</button>
    </>
  );
}

export default Button;
