import "./styles.css";
import { clear } from "./ts/clear";
import { showResult } from "./ts/showResult";
import { numbers } from "./ts/numbers";
import { operators } from "./ts/operators";

function initializeCalculator() {
  window.onload = () => {
    const display = document.querySelector(".display") as HTMLElement;
    display.textContent = "0";
  };
  numbers();
  operators();
  showResult();
  clear();
}

initializeCalculator();
console.log("hello world");
