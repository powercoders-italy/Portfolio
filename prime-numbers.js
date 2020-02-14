// Print all prime numbers up to NUM.
// Sieve of Erathostenes
// 2 3 4 5 6 7 8 9 10
// 2 3 x 5 x 7 x x  x

console.log(firstPrimeNumbers(10));

function firstPrimeNumbers(NUM) {
  for (let num = 2; num <= NUM; num++) {
    if (isPrime(num)) {
      console.log(num);
    }
  }
}

function isPrime(num) {
  let isPrime = true;
  for (let previous = 2; previous < num && isPrime; previous++) {
    if (isDivisibleBy(num, previous)) {
      isPrime = false;
    }
  }
  return isPrime;
}

function isDivisibleBy(a, b) {
  return a % b === 0
}