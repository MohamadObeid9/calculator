import { updateDisplay } from "./updateDisplay";

export const numbers = () => {
  const numbers = document.querySelectorAll<HTMLButtonElement>(".number");
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      const value = number.textContent.trim();
      updateDisplay(value);
    });
  });
};
