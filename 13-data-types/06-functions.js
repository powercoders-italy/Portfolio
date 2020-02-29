/**
 * Factorial: 6! = 6 * 5 * 4 * 3 * 2 * 1
 * Factorial: 6! = 6 * factorial(5)
 */

function factorial(num) {
  let fact = 1
  for (let i = 2; i <= num; i++) {
    fact *= i
  }
  return fact
}

function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1)
}
