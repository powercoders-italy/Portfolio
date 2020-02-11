// alert('...')
// confirm('...')
// prompt('...')
// Math.random()
// Math.floor(num)
// console.log('...')

// function printHello() {
//   console.log('Hello world!');
// }
// printHello();

// function printHello() {
//   let who = 'world';
//   console.log(`Hello ${who}!`);
// }

// let who = 'somebody';
// function printHello() {
//   console.log(`Hello ${who}!`);
// }

// let who = 'somebody';
// function printHello() {
//   who = 'world';
//   console.log(`Hello ${who}!`);
// }

// let who = 'somebody';
// function printHello() {
//   let who = 'world';
//   console.log(`Hello ${who}!`);
// }

function printSum(x, y) {
  // console.log(x + y);
  x + y;
}

let x = 2;
function sum(y) {
  return x + y;
}

function sum(x, y) {
  let theSum = x + y;
  return theSum;
}

function calculateHypothenuse(a, b) {
  let squareA = square(a);
  let squareB = square(b);
  let sumOfTheTwo = sum(squareA, squareB);
  let hypothenuse = root(sumOfTheTwo);
  return hypothenuse;
  // return root(sum(square(a), square(b)));
  // return 5;
}

function sum(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}

function root(x) {
  return Math.sqrt(x);
}

function showMessage(from, text) {
  from = '*' + from + '*';

  console.log(from + ': ' + text);
}

function printOperations(x = 0, y = 0) {
  console.log('sum:', x + y);
  console.log('subtraction:', x - y);
  console.log('multiplication:', x * y);
  console.log('division:', x / y);
  console.log('power:', x ** y);
  console.log('remainder:', x % y);
}