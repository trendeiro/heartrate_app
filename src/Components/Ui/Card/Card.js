import classes from "./Card.module.css";

function Card(props) {
  const css = props.style ? [classes.card, props.style] : [classes.card];

  return <div className={css.join(" ")}>{props.children}</div>;
}

export default Card;
