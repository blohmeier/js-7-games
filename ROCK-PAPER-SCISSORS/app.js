"use strict";
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1) /*//NOTES:
     //1. '+ 1' is just for readability.
     //2.  Can use ' * 3' instead of ' * possibleChoices.length' but then need to wrap in 'Math.floor(...'.
    console.log(randomNumber);*/
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Paper covers Rock - You Win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Rock crushes Scissors - You Lose.'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Scissors cuts Paper - You Win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Paper covers Rock - You Lose.'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Rock crushes Scissors - You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Scissors cuts Paper - You Lose.'
    }
    resultDisplay.innerHTML = result;
}