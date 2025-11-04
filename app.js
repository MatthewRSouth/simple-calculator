'use strict';

//Selectors
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const screen = document.querySelector('.screen');

//numbers
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const point = document.querySelector('.point');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

//button pressed function
function buttonPressed(buttonContent) {
    screen.textContent = buttonContent;
    if (buttonContent === 'clear') {
        screen.textContent = '';
    }
}
//button selectors
one.addEventListener('click', () => buttonPressed('1'));
two.addEventListener('click', () => buttonPressed('2'));
three.addEventListener('click', () => buttonPressed('3'));
four.addEventListener('click', () => buttonPressed('4'));
five.addEventListener('click', () => buttonPressed('5'));
six.addEventListener('click', () => buttonPressed('6'));
seven.addEventListener('click', () => buttonPressed('7'));
eight.addEventListener('click', () => buttonPressed('8'));
nine.addEventListener('click', () => buttonPressed('9'));
zero.addEventListener('click', () => buttonPressed('0'));
addition.addEventListener('click', () => buttonPressed('+'));
subtraction.addEventListener('click', () => buttonPressed('-'));
multiplication.addEventListener('click', () => buttonPressed('x'));
division.addEventListener('click', () => buttonPressed('÷'));
clear.addEventListener('click', () => buttonPressed('clear'));
point.addEventListener('click', () => buttonPressed('.'));
