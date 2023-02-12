import classes from "./card_front.module.css";
import logo_image from "../../images/card-logo.svg";

function CardFront(props) {
  const mainclass = `${classes.card} ${classes.card_front}`;

  return (
    <div className={mainclass}>
      <img src={logo_image} className={classes.logo} alt="" srcSet="" />
      <section className={classes.output_section}>
        <h1 className="number_output">{props.updateCardno}</h1>
        <div>
          <p className="name_output">{props.updateName}</p>
          <p>
            <span className="month_output">{props.updateMonth}</span>/
            <span className="year_output">{props.updateYear}</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default CardFront;