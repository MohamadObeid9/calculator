import { variables } from "./variables";

export const clear = (): void => {
  const clearButton = document.querySelector<HTMLButtonElement>(".clear");
  if (!clearButton) return;

  clearButton.addEventListener("click", () => {
    const { displayArea, operationArea } = variables();
    displayArea.textContent = "0";
    operationArea.textContent = "";
  });
};
