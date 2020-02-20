const arr = [5, 8, 3, 4, 2]
// index:    0  1  2  3  4

/* supporting functions */
function isEven(num) {
  return num % 2 === 0
}

// function printAll(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i}: ${arr[i]}`)
//   }
// }

// function printAll(arr) {
//   for (let item of arr) {
//     console.log(item)
//   }
// }

// printAll(arr)

function allDoubles(arr) {
  /* initialize some variable */
  let doubles = []

  /* loop over the array */
  for (let item of arr) {
    /* update the variable */
    doubles.push(item * 2)
  }

  /* return that variable */
  return doubles
}

function map(arr, callback) {
  let newArr = []

  for (let item of arr) {
    newArr.push(callback(item))
  }

  return newArr
}

map(arr, callback)
arr.map(callback)

function double(num) {
  return num * 2
}

// console.log(arr, allDoubles(arr))
console.log(arr, map(arr, double))
console.log(
  arr,
  map(arr, num => num * 10)
)

function hasEvens(arr) {
  let hasEvens = false

  for (let item of arr) {
    if (isEven(item)) {
      hasEvens = true
      // break
    }
  }

  return hasEvens
}

function some(arr, callback) {}

function hasEvens(arr) {
  for (let item of arr) {
    if (isEven(item)) {
      return true
    }
  }
  return false
}

function hasEvens(arr) {
  let hasEvens = false

  for (let i = 0; i < arr.length && !hasEvens; i++) {
    if (isEven(arr[i])) {
      hasEvens = true
    }
  }

  return hasEvens
}

// console.log(hasEvens(arr))

function areAllEven(arr) {
  let areAllEven = true

  for (let item of arr) {
    if (!isEven(item)) {
      areAllEven = false
    }
  }

  return areAllEven
}

function every(arr, callback) {}

arr.map(function(elem, index, arr) {})

let sum = arr.reduce(function(acc, elem, index, arr) {
  acc += elem
  return acc
}, 0)

function sum(arr) {
  let sum = 0

  for (let item of arr) {
    sum += item
  }

  return sum
}
