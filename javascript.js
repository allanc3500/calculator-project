const operate = function(number1, sign, number2){
    let a = parseInt(number1);
    let b = parseInt(number2);

    if(sign === "+"){
        return add(a, b);
    }

    if(sign === "-"){
        return subtract(a, b);
    }

    if(sign === "*"){
        return multiply(a, b);
    }

    if(sign === "/"){
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

let operator = "/";
let value2 = -1;
let total = 0;
let firstNumber = 0;
let secondNumber = 0;
let sign = "";



//Next Step: Separate the functions?
//Time: 8:00PM 9/25
function buttonClick(){
    const allNumberButtons = document.querySelectorAll(".number");
    allNumberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            value += button.textContent;
            let value2Plus = value.split('').findLastIndex(valueSubset => valueSubset == "+");
            let value2Minus = value.split('').findLastIndex(valueSubset => valueSubset == "-");
            let value2Multiply = value.split('').findLastIndex(valueSubset => valueSubset == "*");
            let value2Divide = value.split('').findLastIndex(valueSubset => valueSubset == "/");

            value2 = Math.max(value2Plus, value2Minus, value2Multiply, value2Divide);
            if(value2 != -1){
                screen.textContent = value.split('').splice(value2+1).join('');
                if(screen.textContent == ''){
                    screen.textContent = value.split('').splice(0, value2).join('');
                }
            }
            else{
                screen.textContent = value;
            }
        });
    }); 
}

 function acClick(){   
    const acButton = document.querySelector(".ac");
    acButton.addEventListener("click", () => {
        screen.textContent = "0";
        value = "";
    });
    return screen.textContent;
 }

 function signClick(){
    const sign = document.querySelector(".sign");
    sign.addEventListener("click", () => {
        value = +screen.textContent * -1;
        screen.textContent = +screen.textContent * -1;
    });
 }

 function percentClick(){
    const percentButton = document.querySelector(".percent");
    percentButton.addEventListener("click",() => {
        value = +value/100;
        screen.textContent = value;
    });
    
}

function opClick(){
    const opButtons = document.querySelectorAll(".op");
    opButtons.forEach((opButton) => {
        opButton.addEventListener("click", () => {
            firstNumber = value;
            sign = opButton.textContent;
        }) 
    })
}

function evaluate(){
    const evalButton = document.querySelector(".evaluate");
    evalButton.addEventListener("click", () => {
        let a = value.split('').slice(0, value2).join('');
        let sign = value[value2];
        let b = value.split('').slice(value2+1).join('');
        if(value == ''){
            return;    
        }
        screen.textContent = operate(a, sign, b);
        value = screen.textContent;
        console.log(value);
    })
}

buttonClick();
acClick();
signClick();
percentClick();
evaluate();

console.log(operate(4, "+", 3));
console.log(operate(6, "-", 3));
console.log(operate(4, "*", 3));
console.log(operate(4, "/", 3));