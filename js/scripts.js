// business logic
const calcBtn = document.querySelectorAll(".btn")
const opt = document.querySelectorAll(".opt")
const screen = document.querySelector(".calc-screen")
const clearBtn = document.querySelector(".clear")

let num1 = '';
let operator;
let num2 = '';
// makes button value appear on calc-screen
calcBtn.forEach(btn => btn.addEventListener('click', () => {
    if (btn.value == parseInt(btn.value)) {
        screen.innerHTML += `${btn.value}`;
        num1 = parseInt(screen.innerHTML);
        console.log(num1)
    } else if (btn.value == '+' || btn.value == '-' || btn.value == '/' || btn.value == '*') {
        screen.innerHTML = '';
        operator = btn.value;
        console.log(operator)
    } else if (btn.value == parseInt(btn.value)) {
        screen.innerHTML += `${btn.value}`;
        num2 = parseInt(screen.innerHTML)
        console.log(num2)
    } else if (btn.value == "=") {
        if (operator == "+") {
            console.log(`num1 is equal to ${num1}`)
            console.log(`num2 is equal to ${num2}`)
            screen.innerHTML = add(num1,num2)
            console.log(add(num1, num2))
        }
    }
}));


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
