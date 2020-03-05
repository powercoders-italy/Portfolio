/**
 * Spread operator on functions: this is usually called 'rest parameters'
 */

const sum = (...args) => args.reduce((a, b) => a + b, 0) // but what is this 'reduce'?

sum(1, 2, 3) // 6

/**
 * Let's have a look at the possible ways to loop over an array
 */

let array = [1, 2, 3, 4, 5]

// while loop
let i = 0
while (i < array.length) {
  console.log(array[i])
  i++
}

// for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

// for..of loop (not to be confused with for..in from objects!)
for (let elem of array) {
  console.log(elem)
}

// forEach method
array.forEach(elem => console.log(elem))

// some support functions that will be used below. I need to declare them here,
// since arrow functions are not subject to hoisting!
const square = elem => elem ** 2
const isEven = elem => elem % 2 === 0
const sum = (a, b) => a + b

// map: creates a new array with every element mapped by a transformation
let squares = array.map(square)
// filter: creates a new array with elements filtered by some condition
let evens = array.filter(isEven) // predicate: function that returns a boolean
// find: returns the first element that satisfies some condition
array.find(isEven)
// findIndex: same as before, but just gives you the position in the array
array.findIndex(isEven)
// reduce: accumulates a variable and returns the final value at the end of the loop
let sumOfElements = array.reduce(sum, 0)

/**
 * How to create a sum of elements? We could start with a sum and accumulate it
 */
let sum = 0
for (let elem of arr) {
  sum = sum + elem
}

/**
 * How to filter even numbers? We could start with an empty array and accumulate it
 */
let evens = []
for (let elem of array) {
  if (isEven(elem)) {
    evens.push(elem)
  }
}

/**
 * Anything can be represented in terms of 'reduce': you always have a variable to accumulate somehow
 */
let evens = array.reduce((acc, elem) => {
  if (isEven(elem)) {
    acc.push(elem)
  }
  return acc
}, [])

/**
 * Exercise: sum the square of even numbers
 * [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20
 */

// first attempt: we define a function that explicitely loops, filters, squares, and sums
function sumOfEvenSquares(array) {
  let sum = 0

  for (let elem of array) {
    if (isEven(elem)) {
      sum += square(elem)
    }
  }

  return sum
}

// second attempt: we write an arrow function that chains array methods together
const sumOfEvenSquares = array =>
  array
    .filter(isEven)
    .map(square)
    .reduce(sum, 0)
