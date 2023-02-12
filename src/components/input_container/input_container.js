import classes from "./input_container.module.css";
import Form from "./Form/form_container";
import Attrition from "./attrition";

function InputContainer(props) {
  return (
    <div className={classes.input_section}>
      <Form
        formValues={props.formValues}
        setFormValues={props.setFormValues}
        initialForm={props.initialForm}
      />
      <Attrition />
    </div>
  );
}

export default InputContainer;
