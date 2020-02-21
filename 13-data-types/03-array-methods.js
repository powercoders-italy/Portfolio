const arr = [5, 8, 3, 4, 2]
// index:    0  1  2  3  4

/* supporting functions */
const isEven = num => num % 2 === 0
const double = num => num * 2
const square = num => num ** 2
const sum = (a, b) => a + b

arr.forEach(item => console.log(item))
console.log(arr.map(double))
console.log(arr.filter(isEven))
console.log(arr.some(isEven))
console.log(arr.every(isEven))
console.log(arr.find(isEven))
console.log(arr.findIndex(isEven))
console.log(arr.reduce(sum, 0))

let doubles = arr.reduce((acc, item) => {
  acc.push(double(item))
  return acc
}, [])

let hasEvens = arr.reduce((acc, item) => {
  if (isEven(item)) {
    acc = true
  }
  return acc
}, false)

console.log(
  arr
    .filter(isEven)
    .map(square)
    .reduce(sum, 0)
)

arr.reduce((acc, item) => {
  if (isEven(item)) {
    acc += square(item)
  }
  return acc
}, 0)
