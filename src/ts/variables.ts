export const variables = () => {
  const firstVariable = "";
  const secondVariable = "";
  const operatorUsed = "";
  const displayValue: number | string = "0";
  const displayArea = document.querySelector<HTMLElement>(".display");

  if (displayArea) {
    displayArea.textContent = displayValue.toString();
  }
  displayArea.textContent = "0";
  return {
    firstVariable,
    secondVariable,
    operatorUsed,
    displayArea,
    displayValue,
  };
};
