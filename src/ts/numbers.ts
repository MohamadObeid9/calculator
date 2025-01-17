import { updateDisplay } from "./updateDisplay";
// import { variables } from "./variables";

export const numbers = () => {
//   const operatorUsed = variables().operatorUsed;
//   let firstVariable = variables().firstVariable;
//   let secondVariable = variables().secondVariable;
  const numbers = document.querySelectorAll<HTMLButtonElement>(".number");
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
    //   const target = e.target as HTMLButtonElement;
    //   if (operatorUsed === "") {
    //     firstVariable += target.textContent || "";
    //   } else {
    //     secondVariable += target.textContent || "";
    //   }
      updateDisplay(e);
    });
  });
};
