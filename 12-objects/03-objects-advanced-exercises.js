/**
 * Deep clones an object, along with its object properties.
 */

function deepClone(obj) {
  const clone = Object.assign({}, obj)
  for (let key in clone) {
    const value = clone[key]
    if (typeof value === 'object' && value != null) {
      clone[key] = deepClone(value)
    }
  }
  return clone
}

const user = {
  name: 'Antony',
  sizes: {
    height: 180,
    weight: 82,
  },
}
const clone = deepClone(user)
console.log(user !== clone)
console.log(user.name === clone.name)
console.log(user.sizes !== clone.sizes)
console.log(user.sizes.height === clone.sizes.height)

/**
 * Memoizes a function, so the value is calculated only once and then retrieved from cache.
 */

function memoize(func) {
  const cache = {}

  return function(num) {
    let value = cache[num]
    if (value != null) {
      console.log('Value taken from cache')
      return value
    }
    value = func(num)
    cache[num] = value
    console.log('Value calculated and cached')
    return value
  }
}

function factorial(num) {
  if (num === 1) return num
  return num * factorial(num - 1)
}

const memoizedFactorial = memoize(factorial)
console.log(memoizedFactorial(6))
console.log(memoizedFactorial(6))
