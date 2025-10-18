const computerChoice = 'Bear';

let playerName   = prompt("Welcome to Bear Hunter Ninja! Please enter your name to get started:");
alert(`Hi ${playerName} Let\'s Play!!`);
let playerChoice = prompt("Who are you: Bear, Ninja, or Hunter?");

let playerMessage   = `${playerName}, You picked ${playerChoice}!`;
let computerMessage = `The computer picked ${computerChoice}!`;

document.getElementById("playerLine").innerHTML   = playerMessage;
document.getElementById("computerLine").innerHTML = computerMessage;

console.log(playerMessage);
console.log(computerMessage);
