import classes from "./card_background.module.css";
import mobile_image from "../../images/bg-main-mobile.png";
import desktop_image from "../../images/bg-main-desktop.png";

function CardBackground() {


  return (
    <picture className={classes.pic}>
      <source media="(min-width: 1024px)" srcSet={desktop_image} />
      <img src={mobile_image} alt="" />
    </picture>
  );
}

export default CardBackground;