/**
 * Array used for testing
 */
const arr = [5, 8, 3, 4, 2]
// index:  0  1  2  3  4

function isEven(num) {
  return num % 2 === 0
}

/**
 * Print all items of an array
 */
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // not just i, that's the index!
  }
}

/* you can also use the for..of loop, way easier */
function printAll(arr) {
  for (let item of arr) {
    console.log(item)
  }
}

/**
 * Create a new array containing the same numbers, doubled
 */
function doubleAll(arr) {
  const doubles = []
  for (let item of arr) {
    doubles.push(item * 2)
  }
  return doubles
}

/**
 * A more generic approach applies a callback function to every element
 */
function applyToAll(arr, callback) {
  const transformed = []
  for (let item of arr) {
    transformed.push(callback(item))
  }
  return transformed
}

/**
 * Check if array has at least one even number
 */
function hasEvenNumbers(arr) {
  let hasEven = false
  for (let item of arr) {
    if (isEven(item)) {
      hasEven = true
    }
  }
  return hasEven
}

/* A faster approach, maybe less readable */
function hasEvenNumbers(arr) {
  for (let item of arr) {
    if (isEven(item)) {
      return true
    }
  }
  return false
}

/**
 * Check if all items are even
 */
function areAllEven(arr) {
  let allEven = true
  for (let item of arr) {
    if (!isEven(item)) {
      allEven = false
    }
  }
  return allEven
}

/* A faster approach */
function areAllEven(arr) {
  for (let item of arr) {
    if (!isEven(arr)) {
      return false
    }
  }
  return true
}

/**
 * Return the first even number, or -1
 */
function findEven(arr) {
  let even = -1
  for (let item of arr) {
    if (isEven(item)) {
      even = item
      break // we need to end the loop prematurely in some way
    }
  }
  return even
}

/* A faster approach */
function findEven(arr) {
  for (let item of arr) {
    if (isEven(item)) {
      return item
    }
  }
  return -1
}

/**
 * Return an array of even numbers, or an empty one
 */
function filterEvens(arr) {
  const evens = []
  for (let item of arr) {
    if (isEven(item)) {
      evens.push(item)
    }
  }
  return evens
}

/* A more generic approach filters items based on some callback */
function filter(arr, callback) {
  const filtered = []
  for (let item of arr) {
    if (callback(item)) {
      filtered.push(item)
    }
  }
  return filtered
}

/**
 * Sum numbers together
 */
function sumAll(arr) {
  let sum = 0
  for (let item of arr) {
    sum += item
  }
  return sum
}

/**
 * Get even numbers, square them, then add them together
 */
function sumSquareOfEvens(arr) {
  let sum = 0
  for (let item of arr) {
    if (isEven(item)) {
      sum += item * item
    }
  }
  return sum
}

/* A different approach, probably more readable */
function sumSquareOfEvens(arr) {
  let evens = filter(arr, isEven)
  let squares = applyToAll(evens, num => num * num)
  let sum = sumAll(squares)
  return sum
}
