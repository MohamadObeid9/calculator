// const add = (a: number, b: number): number => a + b;
// const subtract = (a: number, b: number): number => a - b;
// const multiply = (a: number, b: number): number => a * b;
// const divide = (a: number, b: number): number => a / b;

// let firstVariable: string = "";
// let secondVariable: string = "";
// let operatorUsed: string = "";

// let displayValue: number | string = 0;
// const displayArea = document.querySelector(".display") as HTMLElement;
// displayArea.textContent = displayValue.toString();

// const operate = (
//   operator: string,
//   num1: string,
//   num2: string
// ): number | void => {
// const displayArea = document.querySelector(".display") as HTMLElement;
//   const number1: number = num1 === "" ? 0 : Number(num1);
//   const number2: number = num2 === "" ? 0 : Number(num2);

//   switch (operator) {
//     case "+":
//       displayArea.textContent = `${add(number1, number2)}`;
//       return add(number1, number2);
//     case "-":
//       displayArea.textContent = `${subtract(number1, number2)}`;
//       return subtract(number1, number2);
//     case "*":
//       displayArea.textContent = `${multiply(number1, number2)}`;
//       return multiply(number1, number2);
//     case "/":
//       if (number2 === 0) {
//         alert("ERROR");
//         return;
//       } else {
//         displayArea.textContent = `${divide(number1, number2)}`;
//         return divide(number1, number2);
//       }
//     default:
//       alert("Please choose an operator");
//       return;
//   }
// };

// const updateDisplay = (e: Event) => {
//   const target = e.target as HTMLElement;
//   displayValue = target.textContent || "";
//   if (displayArea.textContent === "0") {
//     displayArea.textContent = displayValue;
//   } else {
//     displayArea.textContent += displayValue;
//   }
// };

// const numbers = document.querySelectorAll<HTMLButtonElement>(".number");
// numbers.forEach((number) => {
//   number.addEventListener("click", (e) => {
//     const target = e.target as HTMLButtonElement;
//     if (operatorUsed === "") {
//       firstVariable += target.textContent || "";
//     } else {
//       secondVariable += target.textContent || "";
//     }
//     updateDisplay(e);
//   });
// });

// const operators = document.querySelectorAll<HTMLButtonElement>(".operator");
// operators.forEach((operator) => {
//   operator.addEventListener("click", (e: MouseEvent) => {
//     const target = e.target as HTMLButtonElement;
//     operatorUsed = target.textContent || ""; //store the operator used in this variable
//     updateDisplay(e);
//   });
// });

// const clear = (firstVariable:string ,secondVariable:string ,operatorUsed:string  ): void => {
//   const clearButton = document.querySelector(".clear") as HTMLButtonElement;
//   clearButton.addEventListener("click", () => {
//     firstVariable = "";
//     secondVariable = "";
//     operatorUsed = "";
//     displayArea.textContent = "0";
//   });
// };

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

// const result = (firstVariable:string,secondVariable:string, operatorUsed:string) => {
//   const resultButton = document.querySelector(".equal") as HTMLButtonElement;
//   resultButton.addEventListener("click", () => {
//     const result = operate(operatorUsed, firstVariable, secondVariable);
//     if (result !== undefined) {
//       firstVariable = Number(result).toString();
//       secondVariable = "0";
//     } else {
//       alert("Error: Invalid operation");
//     }
//   });
// };

// result();
// clear();
