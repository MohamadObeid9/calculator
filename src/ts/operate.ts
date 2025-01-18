import { operations } from "./operations";
import { variables } from "./variables";

export const operate = (
  operator: string,
  num1: string,
  num2: string
): number | void => {
  const { add, subtract, multiply, divide } = operations;
  const { displayArea } = variables();

  const number1 = Number(num1) || 0;
  const number2 = Number(num2) || 0;

  switch (operator) {
    case "+":
      displayArea.textContent = `${add(number1, number2)}`;
      return add(number1, number2);
    case "-":
      displayArea.textContent = `${subtract(number1, number2)}`;
      return subtract(number1, number2);
    case "*":
      displayArea.textContent = `${multiply(number1, number2)}`;
      return multiply(number1, number2);
    case "/":
      if (number2 === 0) {
        displayArea.textContent = "MATH ERROR";
        return;
      } else {
        displayArea.textContent = `${divide(number1, number2)}`;
        return divide(number1, number2);
      }
    default:
      alert("Please choose an operator");
      return;
  }
};
