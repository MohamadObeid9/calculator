import { updateDisplay } from "./updateDisplay";

export const operators = () => {
  const operators = document.querySelectorAll<HTMLButtonElement>(".operator");
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      const value = operator.textContent.trim();
      updateDisplay(value);
    });
  });
};
