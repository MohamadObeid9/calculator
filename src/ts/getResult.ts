import { operate } from "./operate";

export const getResult = (
  operatorUsed: string,
  firstVariable: string,
  secondVariable: string
) => {
  const result = operate(operatorUsed, firstVariable, secondVariable);
  if (result !== undefined) {
    firstVariable = Number(result).toString();
    secondVariable = "0";
  } else {
    alert("Error: Invalid operation");
  }
};
