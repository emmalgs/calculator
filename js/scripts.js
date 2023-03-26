// business logic
const calcBtn = document.querySelectorAll(".btn")
const opt = document.querySelectorAll(".opt")
const screen = document.querySelector(".calc-screen")
const clearBtn = document.querySelector(".clear")


let num1;
let operator;
let num2; 

// makes button value appear on calc-screen
calcBtn.forEach(btn => btn.addEventListener('click', () => {
    if (btn.value == parseInt(btn.value)) {
        screen.innerHTML += `${btn.value}`;
    } 
    else if (btn.value == '+' || btn.value == '-' || btn.value == '/' || btn.value == '*') {
        num1 = parseInt(screen.innerHTML)
        operator = btn.value;
    } else {
        screen.innerHTML = '';
        num2 = parseInt(screen.innerHTML);
        screen.innerHTML = `${answer(num1,num2)}`        
    }
}));

function answer(num1, num2) {
    let result;
    if (num1 != '' && num2 != '') {
        if (operator == "+") {
           result = add(num1,num2);
        } else if (operator == '-') {
            result = subtract(num1,num2)
        } else if (operator == '*') {
            result = multiply(num1,num2)
         } else {result = divide(num1,num2)}
    } else {screen.innerHTML= 'ERROR' }
    return result
}

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function divide(number1,number2) {
    return number1 / number2;
}

function multiply(number1,number2) {
    return number1 * number2;
}



// reloads page when clear button is clicked
clearBtn.addEventListener("click", () => {
    window.location.reload();
})
