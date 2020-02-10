// Print all prime numbers up to NUM.
// Sieve of Erathostenes
// 2 3 4 5 6 7 8 9 10
// 2 3 x 5 x 7 x x  x

function firstPrimeNumbers(NUM) {
  for (let num = 2; num <= NUM; num++) {
    let isPrime = checkPrime(num);

    if (isPrime) {
      console.log(num);
    }
  }
}

function checkPrime(num) {
  let isPrime = true;
  for (let previous = 2; previous < num && isPrime; previous++) {
    if (num % previous === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}