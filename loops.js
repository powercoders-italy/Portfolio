// variable called i that was initialized as 0
// while loop checks if i is less than 3
// the loop body alerted i (console.log) and incremented i
// the final result was: printing 0, 1, 2

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// let n = 0;
// while (!n) {
//   console.log(n);
//   n--;
// }

/*
  I want to build a string that looks like this:
  "Na Na Na Na Na (...16 times) Batman!"
  The string should be built by looping 16 times, and at the end of the loop I want to print the result to the console
*/

// we can use string concatenation to build strings

console.log("Na ".repeat(16) + "Batman!");

let count = 0;
let str = "";
while (count < 16) {
  str += "Na ";
  count++;
}
str += "Batman!";
console.log(str);

// single-variable

const NA = "Na ";
const REPEAT_COUNT = 16;
let str = "";
while (str.length < REPEAT_COUNT * NA.length) {
  str += NA;
}
str += "Batman!";
console.log(str);

// 1 + 2 + 3 + 4 + 5

let currentNumber = 1;
let sum = 0;
while (currentNumber <= 5) {
  sum = sum + currentNumber;
  // console.log(sum);
  currentNumber++;
}

console.log(sum);
