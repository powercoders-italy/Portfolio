let pen = 'pen';
let applePen = apple + pen;
let apple = 'apple';

var pen = 'pen';
var applePen = apple + pen;
var apple = 'apple';

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

// HOISTING

// let hypothenuse = calculateHypothenuse(3, 4)
// console.log(hypothenuse)

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

/*

Context: Devil May Cry
Stylish Rankings

1 = Dull!
5 = Cool!
10 = Bravo!
15 = Awesome!
20 = Stylish!

Create a function that, given the amount of damage you inflict to enemies,
will return the related stylish ranking string.

Hint: use the switch statement.

*/

/* First Attempt: */

/* BEFORE: */
// let = damage;
// function Dvc (){
//   if (damage = 0, damage = 1) {
//     return "Dull!"

//   }

// if (damage = [2-5]) {
//     return "Cool!"
// }
// }
/* END */

/* AFTER: */
// function getStylishRanking(damage) {
//   if (damage === 0 || damage === 1) {
//     return "Dull!"
//   }

//   if (damage >= 2 && damage <= 5) {
//     return "Cool!"
//   }
// }
/* END */

/* Second Attempt: */

/* BEFORE: */
// let amonth = 1

// switch (amonth) {
//   case "Dull":
//     damage = 1
//     break
//   case "Cool":
//     damage = 5
//     break
//   case "Bravo":
//     damage = 10
//     break
//   case "Awesome":
//     damage = 15
//     break
//   case "Stylish":
//     damage = 20
//     break
//   default:
//     alert("not really");
// }

/* END */

/* AFTER: */
function getStylishRanking(amount) {
  let ranking

  switch (amount) {
    case 1:
      ranking = "Dull!"
      break
    case 5:
      ranking = "Cool!"
      break

    default:
      alert("not really");
  }

  return ranking
}

// console.log(getStylishRanking(5))
/* END */

/* Third attempt: */

/* BEFORE: */
let Rankings;
let Compliment;
switch ("1") {

  case "1":
    compliment = "Dull!"
    Rankings = "1!"
    break

  case "5":
    compliment = "Cool!"
    break
}
/* END */

/* AFTER: */
function getStylishRanking(rankings) {
  let compliment;

  switch (rankings) {
    case 1:
      compliment = "Dull!";
      break;

    case 5:
      compliment = "Cool!";
      break;
  }

  return compliment;
}
/* END */

function getStylishRanking(damage) {
  switch (damage) {
    case 1:
      return "Dull!"

    case 5:
      return "Cool!"

    case 10:
      return "Bravo!"
  }
}

// GLOBAL NAMESPACE POLLUTION

// IIFE - Immediately Invoked Function Expression

(function () {
  let a = 2;
  alert(a);
})()

/* function expression */

let sum = function (x, y) {
  return x + y;
}

sum(2, 3);

/* function declaration */
function sum(x, y) {
  return x + y;
}

/* callback functions */

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

ask('Do you like JavaScript?', yes, no);

function yes() {
  console.log('Very good!');
}

function no() {
  console.log('Too bad...');
}

/* arrow functions */

sum: (x, y) -> x + y

function sum(x, y) {
  return x + y;
}

let sum = function (x, y) { return x + y }


let sum = (x, y) => x + y
let square = x => x * x
let shout = () => alert('YOOOP!')

console.log(this);

let sum = (x, y) => {
  console.log(this);
  return x + y;
}

sum(2, 3)


function doSomething(theThing) {
  return theThing();
}

let doSomething = function (theThing) {
  return theThing();
}

let doSomething = (theThing) => {
  return theThing();
}

let doSomething = theThing => theThing()

function sum(a, b) {
  return sum(a, b);
}