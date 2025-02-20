import { useRef, useState } from "react";
import React from "react";
import "./MealitemForm.css";
import Input from "../UI/Input";
const MealitemForm = (props) => {
  const [amountisValid, setAmountIsVaid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsVaid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
      {!amountisValid && <p>Enter a valid Amount</p>}
    </form>
  );
};

export default MealitemForm;
