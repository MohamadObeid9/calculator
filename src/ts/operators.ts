import { updateDisplay } from "./updateDisplay";

// Function to add event listeners to all elements with the class "operator"
export const operators = () => {
  // Select all elements with the class "operator" and cast them as HTMLButtonElement
  const operators = document.querySelectorAll<HTMLButtonElement>(".operator");

  // Iterate over each operator element
  operators.forEach((operator) => {
    // Add a click event listener to each operator element
    operator.addEventListener("click", () => {
      // Get the text content of the operator element and trim any whitespace
      const value = operator.textContent.trim();
      // Call the updateDisplay function with the operator value
      updateDisplay(value);
    });
  });
};
