'use strict';

//Selectors
const addition = document.querySelector('.addition').value;
const subtraction = document.querySelector('.subtraction').value;
const multiplication = document.querySelector('.multiplication').value;
const division = document.querySelector('.division').value;
const screen = document.querySelector('.screen');

//numbers
const one = document.querySelector('.one');
const two = Number(document.querySelector('.two').value);
const three = Number(document.querySelector('.three').value);
const four = Number(document.querySelector('.four').value);
const five = Number(document.querySelector('.five').value);
const six = Number(document.querySelector('.six').value);
const seven = Number(document.querySelector('.seven').value);
const eight = Number(document.querySelector('.eight').value);
const nine = Number(document.querySelector('.nine').value);
const zero = Number(document.querySelector('.zero').value);
const point = document.querySelector('.point').value;
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
console.log(screen.textContent);
if (screen.textContent === '') {
    console.log('no text');
} else {
    console.log('text present');
}
/*
Breakdown
1. input a value (number)
2. The value is saved and displayed on the screen
3. input an opeand and it is saved and displayed
4. input another value, save it and display it 
5. Once you hit equals, the equation we built is computed based on the operand and it gives us a return value
6. The return value is displayed to the screen as our answer. 

How do we properly saved the first value to x?
x = the first value we input, which means if there is nothing there we save the value to x (unless it's an operand). How do we check if anything is inside the screen?
if (screen.textContent = '') then x = inputNumber (how do we get the input number saved to x? we need an if statement for sure.)
once a number is pressed, make a function that checks if the textContent is empty, and update the text content to that value

//This will only work for single values right now.
*/

let x;
let y;
let equation;
function checkForX(number) {
    if (screen.textContent === '') {
        x = number;
        x.concat('', equation);
    } else {
        y = number;
    }
}
one.addEventListener('click', () => {
    const numberOne = Number(one.value);
    checkForX(numberOne);
});
// c

//button pressed function
//x = first number that is pressed

// function equation(x, operand, y) {
//     // if the length of the screen string is less than or equal to 0, then the number should be saved to x, else it should be y.
//     // I am having trouble visualizing how the number is saved, I think it's just saved into a varaible (firstNumber), then displayed to the screen element.
//     //Problem: How do I get the input from any button to be shown on the screen.
//     //problem: How do I get the first value to be saved to the x variable?
//     //process:
//     //1. press a button (event listener)
//     //2. the value is saved to the function as x (first number)
//     //3. The value is also simultneously put on the screen
//     //This function builds the equation dynamically
//     //1. Get first input and set it = x
//     //2. get operand input and set it equal to operand
//     //3. get second input and set it = y w
// }
// let x;
// let y;
// let operandButton;
// addition.addEventListener('click', function () {
//     operandButton = 'addition';
// });
// subtraction.addEventListener('click', function () {
//     operandButton = 'subtraction';
// });
// multiplication.addEventListener('click', function () {
//     operandButton = 'multiplication';
// });
// division.addEventListener('click', function () {
//     operandButton = 'divsion';
// });

// function operand(operand) {
//     if (operand === 'addition') {
//         return '+';
//     } else if (operand === 'subtraction') {
//         return '-';
//     } else if (operand === 'multiplication') {
//         return 'x';
//     } else if (operand === 'division') {
//         return '÷';
//     }
// }

// let equation = `${x} ${operand(operandButton)} ${y}`;
// screen.textContent = equation;
