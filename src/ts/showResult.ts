import { getResult } from "./getResult";

// Function to show the result when the equal button is clicked
export const showResult = () => {
  // Get the button element with class "equal"
  const resultButton = document.querySelector(".equal") as HTMLButtonElement;

  // Add a click event listener to the button
  resultButton.addEventListener("click", () => getResult());
};
