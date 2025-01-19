import { variables } from "./variables";

// Function to update the display with the given value
export const updateDisplay = (value: string): void => {
  // Destructure displayArea from the variables object
  const { displayArea } = variables();

  // If value is an empty string, set displayValue to "0"
  const displayValue = value || "0";

  // Update the displayArea's textContent
  displayArea.textContent =
    displayArea.textContent === "0"
      ? displayValue // If the current textContent is "0", replace it with displayValue
      : (displayArea.textContent += displayValue); // Otherwise, append displayValue to the current textContent
};
