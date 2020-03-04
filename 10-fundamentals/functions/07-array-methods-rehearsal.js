const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3) // 6

let array = [1, 2, 3, 4, 5]

// while loop
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

// for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

// for..of loop
for (let elem of array) {
  console.log(elem)
}

// forEach method
array.forEach(elem => console.log(elem))

const square = elem => elem ** 2
const isEven = elem => elem % 2 === 0
const sum = (a, b) => a + b

// creates a new array with every element mapped by a transformation
let squares = array.map(square)
// creates a new array with elements filtered by some condition
let evens = array.filter(isEven) // predicate: function that returns a boolean
// returns the first element that satisfies some condition
array.find(isEven)
array.findIndex(isEven)

let sumOfElements = array.reduce(sum, 0)

let sum = 0
for (let elem of arr) {
  sum = sum + elem
}

let evens = []
for (let elem of array) {
  if (isEven(elem)) {
    evens.push(elem)
  }
}

let evens = array.reduce(
  (acc, elem) => {
    if (isEven(elem)) {
      acc.push(elem)
    }
    return acc
  },
  []
)

// sum the square of even numbers
[1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

function sumOfEvenSquares(array) {
  let sum = 0

  for (let elem of array) {
    if (isEven(elem)) {
      sum += square(elem)
    }
  }

  return sum
}

const sumOfEvenSquares = array => array.filter(isEven).map(square).reduce(sum, 0)
