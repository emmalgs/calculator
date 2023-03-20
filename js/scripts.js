// business logic
const calcBtn = document.querySelectorAll(".btn")
const opt = document.querySelectorAll(".opt")
const screen = document.querySelector(".calc-screen")
const clearBtn = document.querySelector(".clear")



// makes button value appear on calc-screen
calcBtn.forEach(btn => btn.addEventListener('click', () => {
    let num1;
    let operator;
    let num2; 
    let answer;
    if (btn.value == parseInt(btn.value)) {
        screen.innerHTML += `${btn.value}`;
    } 
    else if (btn.value == '+' || btn.value == '-' || btn.value == '/' || btn.value == '*') {
        num1 = parseInt(screen.innerHTML)
        screen.innerHTML = '';
        operator = btn.value;
        console.log(num1)
        console.log(operator)
    } else {
        num2 = parseInt(screen.innerHTML);
        console.log(num2)
        if (operator == "+") {
            return answer = add(num1,num2);
        } else if (operator == '-') {
            return answer = subtract(num1,num2)
        } else {console.log(answer)}
        
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
