import { updateDisplay } from "./updateDisplay";
// import { variables } from "./variables";

export const numbers = () => {
  const numbers = document.querySelectorAll<HTMLButtonElement>(".number");
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      const value = number.textContent;
      updateDisplay(value);
    });
  });
};
