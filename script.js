const add             = (a,b)=> a+b;
const subtract        = (a,b)=> a-b;
const mutiply         = (a,b)=> a*b;
const divide          = (a,b)=> a/b;

let firstVariable   = 0 ;
let secondVariavle  = 0 ;
let operator        = null ;

const operate = (operator,num1,num2)=>{
    add(num1,num2);
    subtract(num1,num2);
    mutiply(num1,num2);
    divide(num1,num2);
};
const appearOnDisplay = ()=>{
    const display = document.querySelector(".display");
    const number = document.querySelector(".number");
    number.addEventListener("click",()=>display.textContent += number);
};
appearOnDisplay();