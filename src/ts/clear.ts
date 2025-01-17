import { variables } from "./variables";

export const clear = (): void => {
  const clearButton = document.querySelector<HTMLButtonElement>(".clear");
  if (!clearButton) return;

  clearButton.addEventListener("click", () => {
    const vars = variables();
    vars.firstVariable = "";
    vars.secondVariable = "";
    vars.operatorUsed = "";
    vars.displayArea.textContent = "0";
  });
};
