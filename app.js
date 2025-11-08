'use strict';

//Selectors
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const screen = document.querySelector('.screen');

//numbers
const one = document.querySelector('.one');
// const two = document.querySelector('.two');
// const three = document.querySelector('.three');
// const four = document.querySelector('.four');
// const five = document.querySelector('.five');
// const six = document.querySelector('.six');
// const seven = document.querySelector('.seven');
// const eight = document.querySelector('.eight');
// const nine = document.querySelector('.nine');
// const zero = document.querySelector('.zero');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const point = document.querySelector('.point');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

let currentDisplayValue = '';
let selectedOperator = null;
let previousInput;

clear.addEventListener('click', () => {
    currentDisplayValue = '';
    render();
});

operators.forEach((operator) => {
    operator.addEventListener('click', function () {
        const operatorClickedValue = operator.value;
        if (currentDisplayValue === '') return;

        selectedOperator = operator.value;
        previousInput = currentDisplayValue;
        render();
    });
});

numbers.forEach((number) => {
    number.addEventListener('click', function () {
        //1. on click, get the value update the currend dispaly value to the value
        const clickedValue = number.value;
        if (selectedOperator !== null) {
            currentDisplayValue = '';
        }

        if (currentDisplayValue === '') {
            currentDisplayValue = clickedValue;
        } else {
            currentDisplayValue += clickedValue;
        }

        render();
    });
});
equals.addEventListener('click', function () {
    const previousInputNumber = Number(previousInput);
    const currentDisplayValueNumber = Number(currentDisplayValue);
    if (selectedOperator === '+') {
        const answer = previousInputNumber + currentDisplayValueNumber;
        currentDisplayValue = answer;
        render();
    }
});

function render() {
    screen.textContent = currentDisplayValue;
}
//Make displayValue in to a function

render();
