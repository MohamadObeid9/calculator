"use strict";
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let firstVariable = "";
let secondVariable = "";
let operatorUsed = "";
let displayValue = 0;
const displayArea = document.querySelector(".display");
displayArea.textContent = displayValue.toString();
const operate = (operator, num1, num2) => {
    let number1 = num1 === "" ? 0 : Number(num1);
    let number2 = num2 === "" ? 0 : Number(num2);
    switch (operator) {
        case "+":
            displayArea.textContent = `${add(number1, number2)}`;
            return add(number1, number2);
        case "-":
            displayArea.textContent = `${subtract(number1, number2)}`;
            return subtract(number1, number2);
        case "*":
            displayArea.textContent = `${multiply(number1, number2)}`;
            return multiply(number1, number2);
        case "/":
            if (number2 === 0) {
                alert("ERROR");
                return;
            }
            else {
                displayArea.textContent = `${divide(number1, number2)}`;
                return divide(number1, number2);
            }
        default:
            alert("Please choose an operator");
            return;
    }
};
const updateDisplay = (e) => {
    const target = e.target;
    displayValue = target.textContent || "";
    displayArea.textContent === "0"
        ? (displayArea.textContent = displayValue)
        : (displayArea.textContent += displayValue);
};
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        const target = e.target;
        operatorUsed === ""
            ? (firstVariable += target.textContent || "")
            : (secondVariable += target.textContent || "");
        updateDisplay(e);
    });
});
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        const target = e.target;
        operatorUsed = target.textContent || ""; //store the operator used in this variable
        updateDisplay(e);
    });
});
const clear = () => {
    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", () => {
        firstVariable = "";
        secondVariable = "";
        operatorUsed = "";
        displayArea.textContent = "0";
    });
};
// const result = (): void => {
//   const resultButton = document.querySelector(".equal") as HTMLButtonElement;
//   resultButton.addEventListener("click", () => {
//     const result =operate(operatorUsed, firstVariable, secondVariable);
//     if( result === undefined){
//         alert('error');
//         return;
//     }
//     else{
//     firstVariable = result.toString();
//     secondVariable = '0';}
//   });
// };
const result = () => {
    const resultButton = document.querySelector(".equal");
    resultButton.addEventListener("click", () => {
        const result = operate(operatorUsed, firstVariable, secondVariable);
        if (result !== undefined) {
            firstVariable = result.toString();
            secondVariable = "0";
        }
        else {
            alert('Error: Invalid operation');
        }
    });
};
result();
clear();
//# sourceMappingURL=index.js.map