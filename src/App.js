import { useState } from "react";

import Container from "./components/container";
import CardContainer from "./components/card_container/card_container";
import InputContainer from "./components/input_container/input_container";

const initialForm = {
  cardHolderName: "",
  cardNumber: "",
  expDateMonth: "",
  expDateYear: "",
  cvc: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialForm);

  // const CardNumberHandler = (event) => {
  //   let formattedNumber = event.target.value
  //     .toString()
  //     .replace(/\d{4}(?=.)/g, "$& ");
  //   //console.log(event.target.value);
  //   setCardno(formattedNumber);
  // };

  return (
    <Container>
      <CardContainer formvalues={formValues} />
      <InputContainer
        formValues={formValues}
        setFormValues={setFormValues}
        initialForm={initialForm}
      />
    </Container>
  );
}

export default App;
