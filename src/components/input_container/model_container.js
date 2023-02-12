import classes from "./modal_container.module.css";
//import { useState } from "react";
import complete_image from "../../images/icon-complete.svg";

function Modal(props) {
  var valid = props.classvalue;
  
  if (valid) {
    var cls = classes.modal;
  } else {
    var cls = classes.modal_show;
  }


  return (
    <section className={cls}>
      <img src={complete_image} alt="" />
      <h2>Thank You</h2>
      <p>We've added your card details</p>
      <button
        className="btn close"
        type="button"
        onClick={props.submitfunction}
      >
        Continue
      </button>
    </section>
  );
}

export default Modal;
