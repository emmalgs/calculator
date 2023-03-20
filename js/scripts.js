// business logic
function add(number1, number2) {
    return number1 + number2;
}

// user interface logic
const number1 = prompt("Enter a number:");
const number2 = prompt("Enter another number:");

function checkNumber(number1, number2) {
    if (number1 == parseInt(number1) && number2 == parseInt(number2)) {
        return window.alert(add(parseInt(number1), parseInt(number2)));
    } else {
        return window.alert("Please enter a number");
    }
}

checkNumber(number1, number2)





