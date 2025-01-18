import { variables } from "./variables";

export const updateDisplay = (value: string): void => {
  const { displayArea } = variables();
  const displayValue = value ?? "0";

  displayArea.textContent =
    displayArea.textContent === "0"
      ? displayValue
      : displayArea.textContent + displayValue;
};
