import "./styles.css";
import { clear } from "./ts/clear";
import { showResult } from "./ts/showResult";
import { numbers } from "./ts/numbers";
import { operators } from "./ts/operators";

// Function to initialize the calculator
function initializeCalculator() {
  // Set up the display when the window loads
  window.onload = () => {
    const display = document.querySelector(".result-display") as HTMLElement;
    display.textContent = "0"; // Initialize display to 0
  };

  // Initialize calculator functionalities
  numbers(); // Set up number buttons
  operators(); // Set up operator buttons
  showResult(); // Set up result display functionality
  clear(); // Set up clear button functionality
}

// Call the initialize function to set up the calculator
initializeCalculator();

console.log("hello world"); // Log a message to the console
