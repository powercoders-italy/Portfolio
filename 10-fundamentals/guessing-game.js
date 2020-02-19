// One-shot Guessing Game
// I thought of a random number between 1 and 10.
// Guess it
// You only have one attempt.
// The output could be:
// 1. Number 6 was correct
// 2. Number 6 was wrong, I thought about 7

// hints: use the Math.random and Math.floor functions

let random = Math.random(); // 0.000... - 0.999...
let timesTen = random * 10; // 0.000... - 9.999...
let integerPart = Math.floor(timesTen); // 0 - 9
let luckyNumber = integerPart + 1; // 1 - 10

// let luckyNumber = Math.floor(Math.random() * 10) + 1;

let guessString = prompt('Guess the number I have in mind:');
let guess = Number(guessString)

if (guess === luckyNumber) {
  alert('Correct!');
} else if (guess < 1 || guess > 10) {
  alert('Out of bounds! Choose a number between 1 and 10')
} else if (guess < luckyNumber) {
  alert(`${guess} was too low, I thought about ${luckyNumber}`);
} else if (guess > luckyNumber) {
  alert(`${guess} was too high, I thought about ${luckyNumber}`);
} else {
  alert('Please give me a number')
}