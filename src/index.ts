import "./styles.css";
import { clear } from "./ts/clear";
import { showResult } from "./ts/showResult";
import { numbers } from "./ts/numbers";
import { operators } from "./ts/operators";

function initializeCalculator() {
    numbers();
    operators();
    showResult();
    clear();
}

initializeCalculator();
console.log("hello world");
