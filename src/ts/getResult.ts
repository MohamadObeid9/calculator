import { operate } from "./operate";
import { variables } from "./variables";

// Function to get the result of the current operation
export const getResult = () => {
  // Destructure displayArea and operationArea from variables
  const { displayArea, operationArea } = variables();

  // Get the current content of the display area
  const result = displayArea.textContent;

  // Set the operation area content to the result
  operationArea.textContent = result;

  // Split the result into an array of characters
  const rest: string[] = result.split("");
  let index: number;

  // Loop through the characters to find the operator and log if there's a decimal point
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === ".") {
      console.log("this is a comma");
    } else if (isNaN(Number(rest[i]))) {
      index = i; // Store the index of the operator
    }
  }

  let first = "";
  let second = "";

  // Extract the first operand
  for (let i = 0; i < index; i++) {
    first += rest[i];
  }

  // Extract the second operand
  for (let i = index + 1; i < rest.length; i++) {
    second += rest[i];
  }

  // Call the operate function with the operator and operands
  operate(rest[index], first, second);
};
