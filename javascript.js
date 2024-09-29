const operate = function(number1, sign, number2){
    let a = number1;
    let b = number2;

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
    return +a + +b;
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
let total = "";
let firstNumber = "";
let secondNumber = "";
let sign = "";



function buttonClick(){
    const allNumberButtons = document.querySelectorAll(".number");
    allNumberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            total = "";
            if(screen.textContent == "0"){
                if(button.textContent == "0"){
                    screen.textContent = "0";
                    value = "";
                }
                else if(button.textContent == "."){
                    screen.textContent = "0.";
                    value = "0.";
                }
                else{
                    if(value == "0"){
                        value = "";
                    }
                    value += button.textContent;
                    screen.textContent = value; 
                }
            }
            else{
                if((String(value).includes('.')) && firstNumber != ""){
                    if(button.textContent == "."){
                        return;
                    }
                }
                else if(button.textContent == "." && value == ""){
                    screen.textContent = "0.";
                    value = "0.";
                    return;
                }
                console.log(value);
                value += button.textContent;
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
        firstNumber = "";

    });
    return screen.textContent;
 }
//Fix the signs next ---

 function signClick(){
    const sign = document.querySelector(".sign");
    sign.addEventListener("click", () => {
        let number = +screen.textContent * -1;
        value = "" + number;
        screen.textContent = value;
    });
 }

 function percentClick(){
    const percentButton = document.querySelector(".percent");
    percentButton.addEventListener("click",() => {
        screen.textContent = +screen.textContent/100;
        value = screen.textContent;
        total = "";
    });
    
}

function opClick(){
    const opButtons = document.querySelectorAll(".op");
    opButtons.forEach((opButton) => {
        opButton.addEventListener("click", () => {
            if(total != ""){
                firstNumber = total;
            }
            if(firstNumber != "" && secondNumber != ""){
                if(sign == "/" && secondNumber == "0"){
                    screen.textContent = "Error";
                    return;
                }
                total = operate(firstNumber, sign, secondNumber);
                firstNumber = total;
                screen.textContent = total;
                secondNumber = "";
                value = "";
                return;
            }
            else if(firstNumber != "" && sign != ""){
                    secondNumber = screen.textContent;
                    if(sign == "/" && secondNumber == "0"){
                        screen.textContent = "Error";
                        return;
                    }
                    if(secondNumber == ""){
                        return;
                    }
                    total = operate(firstNumber, sign, secondNumber);
                    sign = opButton.textContent;
                    firstNumber = total;
                    screen.textContent = total;
                    value = "";
                    secondNumber = "";
            }
            else if(firstNumber != ""){
                    secondNumber = value; //only this is diff?
                    sign = opButton.textContent;
                    if(sign == "/" && secondNumber == "0"){
                        screen.textContent = "Error";
                        return;
                    }
                    if(secondNumber == ""){
                        return;
                    }
                    total = operate(firstNumber, sign, secondNumber);
                    firstNumber = total;
                    screen.textContent = total;
                    value = "";
                    secondNumber = "";
            }
            else{
                firstNumber = value;
                sign = opButton.textContent;
                value = "";     
            }

        }) 
    })
}

function evaluate(){
    const evalButton = document.querySelector(".evaluate");
    evalButton.addEventListener("click", () => {
        if(sign == "" && secondNumber == ""){
            return;
        }
        if(secondNumber == ""){
            secondNumber = value;
        }
        secondNumber = screen.textContent;
        if(secondNumber == ""){
            screen.textContent = total;
            return;
        }
        if(sign == "/" && secondNumber == "0"){
            screen.textContent = "Error";
            return;
        }

        total = operate(firstNumber, sign, secondNumber);
        screen.textContent = total;
        firstNumber = "";
        sign = "";
        secondNumber = "";
        value = "";
    })
}

buttonClick();
acClick();
signClick();
percentClick();
evaluate();
opClick();

