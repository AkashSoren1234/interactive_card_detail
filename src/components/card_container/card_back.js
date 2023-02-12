import classes from "./card_back.module.css";


function CardBack(props) {
  const mainclass = `${classes.card} ${classes.card_back}`

  return (
    <div className={mainclass}>
      <span className={classes.cvc_output}>{props.updateCvc}</span>
    </div>
  );
}

export default CardBack;