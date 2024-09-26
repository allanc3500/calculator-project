const operate = function(a, value, b){
    
    if(value === "+"){
        return add(a, b);
    }

    if(value === "-"){
        return subtract(a, b);
    }

    if(value === "*"){
        return multiply(a, b);
    }

    if(value === "/"){
        return divide(a, b);
    }
}

const add = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

const screen = document.querySelector(".screen");
let value = "";
let firstNumber = 0;
let secondNumber = 0;

function buttonClick(){
    const allNumberButtons = document.querySelectorAll(".number");
    allNumberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            value += button.textContent;
            screen.textContent = value;
        })
    }) 

    const acButton = document.querySelector(".ac");
    acButton.addEventListener("click", () => {
        screen.textContent = "0";
        value = "";
    });

    const sign = document.querySelector(".sign");
    sign.addEventListener("click", () => {
        value = +value * -1;
        screen.textContent = value;
    });

    const percentButton = document.querySelector(".percent");
    percentButton.addEventListener("click",() => {
        value = +value/100;
        screen.textContent = value;
    });
    
       
    const opButtons = document.querySelectorAll(".op");
    opButtons.forEach((opButton) =>  {
        opButton.addEventListener("click", () => {
            firstNumber = screen.textContent;
            value = "";
        });
    });
}


buttonClick();
console.log(operate(4, "+", 3));
console.log(operate(6, "-", 3));
console.log(operate(4, "*", 3));
console.log(operate(4, "/", 3));