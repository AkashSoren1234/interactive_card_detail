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

  const [name, setName] = useState("Akash Soren");
  const [cvc, setCvc] = useState("");
  const [cardno, setCardno] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");

  const YearInputHandler = (event) => {
    //console.log(event.target.value);
    setYear(event.target.value);
  };

  const MonthInputHandler = (event) => {
    //console.log(event.target.value);
    setMonth(event.target.value);
  };

  const NameInputHandler = (event) => {
    //console.log(event.target.value);
    setName(event.target.value);
  };

  const cvcInputHandler = (event) => {
    setCvc(event.target.value);
  };

  const CardNumberHandler = (event) => {
    let formattedNumber = event.target.value
      .toString()
      .replace(/\d{4}(?=.)/g, "$& ");
    //console.log(event.target.value);
    setCardno(formattedNumber);
  };

  return (
    <Container>
      <CardContainer
        updateName={name}
        updateCvc={cvc}
        updateCardno={cardno}
        updateMonth={month}
        updateYear={year}
      />
      <InputContainer
        nameChange={NameInputHandler}
        cvcChange={cvcInputHandler}
        cardnoChange={CardNumberHandler}
        monthChange={MonthInputHandler}
        yearChange={YearInputHandler}
      />
    </Container>
  );
}

export default App;
