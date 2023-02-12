import classes from "./form_container.module.css";
//import "./input_field.css";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "../../input_container/model_container";


const formatCardNumber = (cardNumber) => {
  return cardNumber
    .replace(/\s/g, "")
    .split("")
    .map((i, index) =>
      Number.isInteger(Number(i)) &&
      (index === 3 || index === 7 || index === 11)
        ? i + " "
        : i
    )
    .join("");
};


function Form({ formValues, setFormValues, initialForm }) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    formValidate();
  }, [formValues, touched]);

  const handleonBlur = (e) => {
    const target = e.target;
    const name = target.name;
    setTouched({ ...touched, [name]: true });
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.value;
  
    if (name === "cardNumber") {
      const newCardNumber =
        formValues["cardNumber"] > value ? value : formatCardNumber(value);
      setFormValues({ ...formValues, "cardNumber": newCardNumber });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const formValidate = (beforeSubmit = false) => {
    let err = [];

    let testField = beforeSubmit || touched["cardHolderName"];
    if (testField && formValues.cardHolderName.length === 0) {
      err["cardHolderName"] = "can't be blank";
    }

    testField = beforeSubmit || touched["cardNumber"];
    if (
      testField &&
      formValues.cardNumber.length > 0 &&
      !/^\d+$|(^(\d+\s)+$)|(^(\d+\s)+\d+$)/.test(formValues.cardNumber)
    ) {
      err["cardNumber"] = "Wrong format, numbers only";
    } else if (testField && formValues.cardNumber.length === 0) {
      err["cardNumber"] = "can't be blank";
    }

    testField = beforeSubmit || touched["expDateMonth"];
    if (testField && formValues.expDateMonth.length === 0) {
      err["expDateMonth"] = "can't be blank";
    } else if (testField && !/^[0-9]+$/.test(formValues.expDateMonth)) {
      err["expDateMonth"] = "Wrong format, numbers only";
    }

    testField = beforeSubmit || touched["expDateYear"];
    if (testField && formValues.expDateYear.length === 0) {
      err["expDateYear"] = "can't be blank";
    } else if (testField && !/^[0-9]+$/.test(formValues.expDateYear)) {
      err["expDateYear"] = "Wrong format, numbers only";
    }

    testField = beforeSubmit || touched["cvc"];
    if (testField && formValues.cvc.length === 0) {
      err["cvc"] = "can't be blank";
    } else if (testField && !/^[0-9]+$/.test(formValues.cvc)) {
      err["cvc"] = "Wrong format, numbers only";
    }

    setErrors(err);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    formValidate(true);
    if (
      Object.values(formValues).filter(Boolean).length === 5 &&
      Object.keys(errors).length === 0
    ) {
      setDone(true);
    }

    if (done) {
      setFormValues(initialForm);
      setErrors({});
      setTouched({});
      setDone(false);
    }
  };

  // useEffect(() => {
  //   document.getElementById("cardHolderName").focus();
  // }, []);

  var valid = !done;

  return (
    <>
      <form className={classes.form} action="" onSubmit={SubmitHandler}>
        <div className={classes.input_field}>
          <label htmlFor="cardHolderName">Cardholder Name</label>
          <input
            className={
              errors["cardHolderName"] ? "inputErrorClass" : "inputClass"
            }
            type="text"
            placeholder="e.g Akash Soren"
            id="cardHolderName"
            name="cardHolderName"
            maxLength="25"
            onChange={handleChange}
            onBlur={handleonBlur}
            value={formValues.cardHolderName}
          />
          <p className={classes.error}>{errors["cardHolderName"]}</p>
        </div>
        <div className={classes.input_field}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            className={errors["cardNumber"] ? "inputErrorClass" : "inputClass"}
            type="text"
            placeholder="e.g 1234 5678 9123 0000"
            id="cardNumber"
            name="cardNumber"
            minLength="19"
            maxLength="19"
            onChange={handleChange}
            onBlur={handleonBlur}
            value={formValues.cardNumber}
          />
          <p className={classes.error}>{errors["cardNumber"]}</p>
        </div>
        <div className={classes.flex_row}>
          <div className={classes.input_field}>
            <label id="date">Exp. Date (MM/YY)</label>
            <div className={classes.date_input}>
              <input
                className={
                  errors["expDateMonth"] ? "inputErrorClass" : "inputClass"
                }
                type="text"
                placeholder="MM"
                id="expDateMonth"
                name="expDateMonth"
                maxLength="2"
                onChange={handleChange}
                onBlur={handleonBlur}
                value={formValues.expDateMonth}
              />
              <input
                className={
                  errors["expDateYear"] ? "inputErrorClass" : "inputClass"
                }
                type="text"
                placeholder="YY"
                id="expDateYear"
                name="expDateYear"
                maxLength="2"
                onChange={handleChange}
                onBlur={handleonBlur}
                value={formValues.expDateYear}
              />
            </div>
            <p className={classes.error}>
              {errors["expDateMonth"] ?? errors["expDateYear"]}
            </p>
          </div>
          <div className={classes.input_field}>
            <label htmlFor="cvc">CVC</label>
            <input
              className={errors["cvc"] ? "inputErrorClass" : "inputClass"}
              type="text"
              placeholder="e.g. 123"
              id="cvc"
              name="cvc"
              maxLength="3"
              onChange={handleChange}
              onBlur={handleonBlur}
              value={formValues.cvc}
            />
            <p className={classes.error}>{errors["cvc"]}</p>
          </div>
        </div>
        <button className="btn" type="submit" name="submit">
          Confirm
        </button>
      </form>
      <Modal classvalue={valid} submitfunction={SubmitHandler} />
    </>
  );
}

export default Form;
