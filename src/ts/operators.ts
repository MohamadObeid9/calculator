import { updateDisplay } from "./updateDisplay";

export const operators = () => {
  const operators = document.querySelectorAll<HTMLButtonElement>(".operator");
  operators.forEach((operator) => {
    operator.addEventListener("click", (e: MouseEvent) => {
    //   const target = e.target as HTMLButtonElement;
    //   const operatorUsed = target.textContent || ""; //store the operator used in this variable
      updateDisplay(e);
    });
  });
};
