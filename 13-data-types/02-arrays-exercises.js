/**
 * Array used for testing
 */
const arr = [5, 8, 3, 4, 2]
// index:  0  1  2  3  4

/**
 * Support functions used below
 */
const isEven = num => num % 2 === 0
const square = num => num * num

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
 * All solutions below have the same basic structure:
 *
 * 1. Initialize some variable
 * 2. Loop over the array items
 *    1. Update that variable for some reason
 * 3. Return the final value of that variable
 */

/**
 * Create a new array containing the same numbers, doubled
 */
function allDoubles(arr) {
  let doubles = [] // initialize

  for (let item of arr) {
    doubles.push(item * 2) // update
  }

  return doubles // return
}

/**
 * Check if array has at least one even number
 */
function hasEvenNumbers(arr) {
  let hasEven = false
  for (let item of arr) {
    if (isEven(item)) {
      hasEven = true
      break // not necessary, but faster
    }
  }
  return hasEven
}

/* A more explicit approach */
function hasEvenNumbers(arr) {
  let hasEvenNumbers = false
  for (let i = 0; !hasEvenNumbers && i < arr.length; i++) {
    if (isEven(arr[i])) {
      hasEvenNumbers = true
    }
  }
  return hasEvenNumbers
}

/* Another approach that returns as soon as it knows the answer */
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
    if (!isEven(item)) {
      return false
    }
  }
  return true
}

/**
 * Return the first even number, or undefined
 */
function findEven(arr) {
  let even
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
  // returns undefined by default
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

/**
 * A more generic approach to the ones described above
 * is applying to every element a callback function
 * defined elsewhere
 */
function map(arr, callback) {
  const mapped = []
  for (let item of arr) {
    mapped.push(callback(item))
  }
  return mapped
}

/**
 * This approach can be used pretty much everywhere
 */
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
 * Using the callback approach, we can write
 * the last exercise like so: */
function sumSquareOfEvens(arr) {
  let evens = filter(arr, isEven)
  let squares = map(evens, square)
  let sum = sumAll(squares)
  return sum
}
