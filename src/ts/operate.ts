import { operations } from "./operations"; // Importing operations module
import { variables } from "./variables"; // Importing variables module

// Function to perform arithmetic operations
export const operate = (
  operator: string, // Operator to determine the operation
  num1: string, // First number as string
  num2: string // Second number as string
): number | void => {
  const { add, subtract, multiply, divide } = operations; // Destructuring operations
  const { displayArea } = variables(); // Getting display area from variables

  const number1 = Number(num1) || 0; // Converting num1 to number, default to 0 if NaN
  const number2 = Number(num2) || 0; // Converting num2 to number, default to 0 if NaN

  switch (operator) {
    case "+": {
      const result = add(number1, number2); // Perform addition
      displayArea.textContent = `${Number(result.toFixed(5))}`; // Display result
      return Number(result.toFixed(5)); // Return result rounded to 5 decimal places
    }
    case "-": {
      const result = subtract(number1, number2); // Perform subtraction
      displayArea.textContent = `${Number(result.toFixed(5))}`; // Display result
      return Number(result.toFixed(5)); // Return result rounded to 5 decimal places
    }
    case "*": {
      const result = multiply(number1, number2); // Perform multiplication
      displayArea.textContent = `${Number(result.toFixed(5))}`; // Display result
      return Number(result.toFixed(5)); // Return result rounded to 5 decimal places
    }
    case "/": {
      if (number2 === 0) { // Check for division by zero
        displayArea.textContent = "MATH ERROR"; // Display error message
        return; // Return nothing
      } else {
        const result = divide(number1, number2); // Perform division
        displayArea.textContent = `${Number(result.toFixed(5))}`; // Display result
        return Number(result.toFixed(5)); // Return result rounded to 5 decimal places
      }
    }
    default:
      alert("Please choose an operator"); // Alert for invalid operator
      return; // Return nothing
  }
};
