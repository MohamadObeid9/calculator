import { updateDisplay } from "./updateDisplay";

// Function to add click event listeners to all elements with the class "number"
export const numbers = () => {
  // Select all elements with the class "number" and cast them as HTMLButtonElement
  const numbers = document.querySelectorAll<HTMLButtonElement>(".number");

  // Iterate over each selected element
  numbers.forEach((number) => {
    // Add a click event listener to each element
    number.addEventListener("click", () => {
      // Get the text content of the clicked element and trim any whitespace
      const value = number.textContent.trim();
      // Call the updateDisplay function with the trimmed value
      updateDisplay(value);
    });
  });
};
