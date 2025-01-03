// declare the basic 4 math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// some variables to hold the choices of the user (two number , one operator)
let firstVariable = "";
let secondVariable = "";
let operatorUsed = "";

// a function that can detect which operator to use
const operate = (operator, num1, num2) => {
  num1 === "" ? (num1 = 0) : (num1 = Number(num1)); //replaced parseInt with Number so parseInt("1.5")=1 while number("1.5")=1.5
  num2 === "" ? (num2 = 0) : (num2 = Number(num2));
  if (operator === "+") {
    displayArea.textContent = `${add(num1, num2)}`;
    return add(num1, num2);
  } else if (operator === "-") {
    displayArea.textContent = `${subtract(num1, num2)}`;
    return subtract(num1, num2);
  } else if (operator === "*") {
    displayArea.textContent = `${multiply(num1, num2)}`;
    return multiply(num1, num2);
  } else if (operator === "/") {
    if ((num2 = 0)) {
      alert("ERROR");
    } else {
      displayArea.textContent = `${divide(num1, num2)}`;
      return divide(num1, num2);
    }
  } else {
    alert("pls choose an operator");
  }
};

// initialize the display to 0
let displayValue = 0;
const displayArea = document.querySelector(".display");
displayArea.textContent = displayValue;

// let the number or operator appear on the display
const updateDisplay = (e) => {
  displayValue = e.target.textContent;
  displayArea.textContent === "0"
    ? (displayArea.textContent = displayValue)
    : (displayArea.textContent += displayValue);
};

// set the numbers to appear on the screen
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    operatorUsed === ""
      ? (firstVariable += e.target.textContent)
      : (secondVariable += e.target.textContent);
    updateDisplay(e);
  });
});

// set the operators to appear on the screen
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    operatorUsed = e.target.textContent; //store the operator used in this variable
    updateDisplay(e);
  });
});

// a clear function that reset the display to 0
const clear = () => {
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", () => {
    firstVariable = "";
    secondVariable = "";
    operatorUsed = "";
    displayArea.textContent = 0;
  });
};
// here we utilize everything we did before to let the calcutor work perfectly
const result = () => {
  const resultButton = document.querySelector(".equal");
  resultButton.addEventListener("click", () => {
    const result = operate(operatorUsed, firstVariable, secondVariable);
    firstVariable = result;
    secondVariable = 0;
  });
};

result();
clear();
