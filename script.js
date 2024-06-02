const add             = (a,b)=> a+b;
const subtract        = (a,b)=> a-b;
const mutiply         = (a,b)=> a*b;
const divide          = (a,b)=> a/b;

// some variables to hold the choices of the user (two number , one operator)
let firstVariable   = 0 ;
let secondVariavle  = 0 ;
let operatorUsed    = null ;

// a function that can detect which operator to use
const operate = (operator,num1,num2)=>{
    (operator === "+") ? add(num1,num2):
    (operator === "-") ? subtract(num1,num2):
    (operator === "*") ? mutiply(num1,num2):
    (operator === "/") ? divide(num1,num2):
    alert("pls choose an operator");
};

// initialize the display to 0
let displayValue = 0 ;
const displayArea = document.querySelector(".display");
displayArea.textContent += displayValue;

// let the number or operator appear on the display
const updateDisplay = (e)=>{
    displayValue = e.target.textContent;
    displayArea.textContent = displayValue;
}

// set the numbers to appear on the screen
const numbers = document.querySelectorAll(".number");
numbers.forEach( number =>{
    number.addEventListener("click",(e)=>{
        updateDisplay(e);
    })
});

// set the operators to appear on the screen
const operators = document.querySelectorAll(".operator");
operators.forEach( operator =>{
    operator.addEventListener("click",(e)=>{
        operatorUsed =  e.target.textContent;
        updateDisplay(e);
    })
});

// a clear function that reset the display to 0
const  clear = ()=>{
    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click",()=> displayArea.textContent = 0)
};
clear();




// const result = ()=>{
//     const resultButton = document.querySelector(".equal");
//     resultButton.addEventListener("click",()=>{
//         operate()
//     })
// };