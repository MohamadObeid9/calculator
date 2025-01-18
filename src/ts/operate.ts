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
  // Number(result.toFixed(5))
  switch (operator) {
    case "+": {
      const result = add(number1, number2);
      displayArea.textContent = `${Number(result.toFixed(5))}`;
      return Number(result.toFixed(5));
    }
    case "-": {
      const result = subtract(number1, number2);
      displayArea.textContent = `${Number(result.toFixed(5))}`;
      return Number(result.toFixed(5));
    }
    case "*": {
      const result = multiply(number1, number2);
      displayArea.textContent = `${Number(result.toFixed(5))}`;
      return Number(result.toFixed(5));
    }
    case "/": {
      if (number2 === 0) {
        displayArea.textContent = "MATH ERROR";
        return;
      } else {
        const result = divide(number1, number2);
        displayArea.textContent = `${Number(result.toFixed(5))}`;
        return Number(result.toFixed(5));
      }
    }
    default:
      alert("Please choose an operator");
      return;
  }
};
