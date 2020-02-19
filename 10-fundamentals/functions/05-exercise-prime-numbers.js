/**
 * Print all prime numbers up to maxNum.
 *
 * The trick is to implement the Sieve of Erathostenes:
 * 1. Run through all the numbers starting from 2
 * 2. Only print those who are prime
 *    a. A prime number is not divisible by any of the previous ones
 *
 * All numbers:   2 3 4 5 6 7 8 9 10
 * Prime numbers: 2 3 x 5 x 7 x x  x
 *
 * Hint: split the problem into multiple subproblems, and put them in functions
 */

firstPrimeNumbers(10)

/* First problem: run through all the numbers and print only those who are prime */
function firstPrimeNumbers(maxNum) {
  for (let num = 2; num <= maxNum; num++) {
    if (isPrime(num)) {
      console.log(num)
    }
  }
}

/* Second problem: how do I know if a number is prime? It's not divisible by the previous numbers */
function isPrime(num) {
  let isPrime = true
  for (let previous = 2; previous < num && isPrime; previous++) {
    if (isDivisibleBy(num, previous)) {
      isPrime = false
    }
  }
  return isPrime
}

/* Third problem: what does it mean to be divisible? Dividing it won't leave any remainder */
function isDivisibleBy(a, b) {
  return a % b === 0
}
