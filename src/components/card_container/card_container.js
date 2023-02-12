import classes from "./card_container.module.css";
import CardBackground from "./card_background";
import CardBack from "./card_back";
import CardFront from "./card_front";

function CardContainer(props) {
  return (
    <div className={classes.card_container}>
      <CardBackground />
      <CardBack updateCvc={props.formvalues.cvc} />
      <CardFront
        updateName={props.formvalues.cardHolderName}
        updateCardno={props.formvalues.cardNumber}
        updateMonth={props.formvalues.expDateMonth}
        updateYear={props.formvalues.expDateYear}
      />
    </div>
  );
}

export default CardContainer;
