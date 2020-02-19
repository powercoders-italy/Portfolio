/**
 * Print all numbers from 0 to 10 (excluded)
 */
for (let i = 0; i < 10; i++) {
  console.log(i)
}

/**
 * Print all numbers from 10 to 0 (excluded), reversed
 */
for (let i = 10; i > 0; i--) {
  console.log(i)
}

/**
 * Print even numbers from 0 to 10 (excluded)
 */

/* Approach 1 (the Zubair): increment by 2 */
for (let i = 0; i < 10; i += 2) {
  console.log(i)
}

/* Approach 2 (the Alex): count up to the number of numbers you want to print, and transform the index */
for (let i = 0; i < 5; i++) {
  console.log(i * 2)
}

/* Approach 3 (the Yannick): run through all the numbers, but print only those who are even */
for (let i = 0; i < 10; i++) {
  let isEven = i % 2 === 0
  if (isEven) {
    console.log(i)
  }
}

/**
 * Keep guessing the number until it's greater than 100 or it's a falsy value
 */

/* Solution with a while */
let num = prompt('Give me a number greater than 100')
while (num && num <= 100) {
  num = prompt('Please try again.')
}
console.log('Yay, thanks! Just what I wanted!')

/* Solution with a 'break': the logic gets inverted */
while (true) {
  let num = prompt('Give me a number greater than 100')
  if (!num || num > 100) {
    break
  }
  console.log('Wrong number!')
}
console.log('Yay, thanks! Just what I wanted!')

/* Solution with a 'for' loop: not very readable */
for (
  let num = prompt('Give me a number greater than 100');
  num && num <= 100;
  num = prompt('Please try again.')
) {}
console.log('Yay, thanks! Just what I wanted!')

/**
 * Build a string that looks like this: "Na Na Na Na Na (...16 times) Batman!"
 * The string should be built by looping 16 times, and at the end of the loop I want to print the result to the console
 * HINT: we can use string concatenation to build strings
 */

let count = 0
let str = ''
while (count < 16) {
  str += 'Na '
  count++
}
str += 'Batman!'
console.log(str)

/**
 * Sum all numbers from 1 to 5
 *
 * HINT: use a variable to accumulate partial results
 */
let sum = 0
for (let currentNumber = 1; currentNumber <= 5; currentNumber++) {
  sum += currentNumber
}
console.log(sum)
