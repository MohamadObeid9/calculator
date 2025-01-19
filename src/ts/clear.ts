import { variables } from "./variables"; // Importing the variables module

// Exporting the clear function
export const clear = (): void => {
  // Selecting the clear button element from the DOM
  const clearButton = document.querySelector<HTMLButtonElement>(".clear");

  // If the clear button is not found, exit the function
  if (!clearButton) return;

  // Adding a click event listener to the clear button
  clearButton.addEventListener("click", () => {
    // Destructuring displayArea and operationArea from the variables function
    const { displayArea, operationArea } = variables();

    // Setting the display area text content to "0"
    displayArea.textContent = "0";

    // Clearing the operation area text content
    operationArea.textContent = "";
  });
};