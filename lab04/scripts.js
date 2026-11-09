let display = document.getElementById('display');
let first = 0;
let activeButton = '';
let newNumber = true;

function Join(number) {
    if (newNumber) {
        display.innerText = number;
        newNumber = false;
    } else {
        display.innerText += number;
    }
}

function setActive(id) {
    if (id === 'C') {
        first = 0;
        activeButton = '';
        display.innerText = 0;
        newNumber = true;
    } else if (id === '=') {
        let second = Number(display.innerText);
        let displayValue = 0;

        if (activeButton === '+') {
            displayValue = first + second;
        } else if (activeButton === '-') {
            displayValue = first - second;
        } else if (activeButton === '*') {
            displayValue = first * second;
        } else if (activeButton === '/') {
            displayValue = first / second;
        } else if (activeButton === '%') {
            displayValue = first % second;
        } else if (activeButton === '') {
            return;
        }
        display.innerText = displayValue;
        first = displayValue;
        activeButton = '';
    } else {
        first = Number(display.innerText);
        activeButton = id;
        newNumber = true;
    }
}
