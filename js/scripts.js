// business logic
const calcBtn = document.querySelectorAll(".calc-btn")
const screen = document.querySelector(".calc-screen")
console.log(calcBtn)

calcBtn.addEventListener('click', display);

function display() {
    screen.innerHTML = `${calcBtn.value}`
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

// user interface logic
// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));
// window.alert("The addition of " + number1 + " and " + number2 + " is:  " + add(number1, number2)
//     + "\nThe subtraction of " + number1 + " and " + number2 + " is:  " + 
//     subtract(number1, number2) + "\nThe division of " + number1 + " and " + number2 + " is:  " + divide(number1, number2)
//     + "\nThe multiplication of " + number1 + " and " + number2 + " is:  " + multiply(number1, number2))



// window.alert("The subtraction of the two numbers is " + subtract(number1, number2));
// window.alert("The division of the two numbers is " + divide(number1, number2));
// window.alert("The multiplication of the two numbers is " + multiply(number1, number2));




