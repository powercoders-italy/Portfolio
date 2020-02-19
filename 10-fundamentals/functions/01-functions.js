/**
 * Functions that we already know
 */
alert('Hello!')
confirm('Are you sure?')
prompt('Tell me your name')
Math.random()
Math.floor(3.14)
console.log('Something happened')

/**
 * Declaring a function and invoking it
 */
function printHello() {
  console.log('Hello world!')
}
printHello()

/**
 * Variables inside a function are encapsulated (hidden) from the outside
 */
function printHello() {
  let who = 'world'
  console.log(`Hello ${who}!`)
}

/**
 * Variables declared outside of a function can be used inside
 */
let who = 'somebody'
function printHello() {
  console.log(`Hello ${who}!`)
}

/**
 * Changing an outside variable as a side effect
 */
let who = 'somebody'
function printHello() {
  who = 'world'
  console.log(`Hello ${who}!`)
}

/**
 * Declaring a variable outside and inside make the two variables different and unrelated
 */
let who = 'somebody'
function printHello() {
  let who = 'world'
  console.log(`Hello ${who}!`)
}

/**
 * A function can have inputs and outputs: parameters and a returned value. This makes it more generic, so more reusable
 */
function sum(x, y) {
  return x + y
}
let theSum = sum(2, 3)
console.log(theSum)

/**
 * We can split the computation into multiple steps, and return the final value at the end
 */
function sum(x, y) {
  let theSum = x + y
  return theSum
}

/**
 * Don't forget to return the value, otherwise it will be lost!
 */
function sum(x, y) {
  x + y
}
console.log(sum(2, 3))

/**
 * We can mix parameters and outer variables, but it reduces readability and predictability
 */
let x = 2
function sum(y) {
  return x + y
}

/**
 * Declared functions are subject to "hoisting": this means that they behave like they were defined at the start of the file,
 * so they can be used even after declaring them
 */
console.log(sum(2, 3))
function sum(x, y) {
  return x + y
}

/**
 * Variables declared with 'var' are subject to hoisting too: it's like they are declared at the top,
 * but still assigned on the current line. Weird behavior, that's why we don't want to use 'var' anymore
 */
var pen = 'pen'
var applePen = apple + pen // apple is declared, but still undefined on this line
var apple = 'apple'

/**
 * No hoisting when using let and const, that's a more predictable behavior
 */
let pen = 'pen'
let pineapplePen = pineapple + pen // pienapple is not defined on this line, we get an error
let pineapple = 'pineapple'

/**
 * Hoisting makes functions easily composable: we can define the main function at the top, and care about the details later on
 */
console.log(calculateHypothenuse(3, 4))

function calculateHypothenuse(a, b) {
  // the functions square, sum, and root are defined below this function
  let squareA = square(a)
  let squareB = square(b)
  let sumOfTheTwo = sum(squareA, squareB)
  let hypothenuse = root(sumOfTheTwo)
  return hypothenuse
  // alternatively we can implement this function in one line:
  // return root(sum(square(a), square(b)));
}

function sum(x, y) {
  return x + y
}

function square(x) {
  return x * x
}

function root(x) {
  return Math.sqrt(x)
}

/**
 * Changing the value of a parameter doesn't affect the variable: values are passed 'by value', which means they are copied
 */
let person = 'Antony'
console.log(showMessage(person, 'Hello')) // internally the person seems to have changed
console.log(person) // but in fact the variable outside is left untouched, only a copy was changed

function showMessage(from, text) {
  from = '*' + from + '*'

  console.log(from + ': ' + text)
}

/**
 * Default paramters: when x and/or y are undefined (or not even passed as parameters), the get the default value of 0
 */
function printOperations(x = 0, y = 0) {
  console.log('sum:', x + y)
  console.log('subtraction:', x - y)
  console.log('multiplication:', x * y)
  console.log('division:', x / y)
  console.log('power:', x ** y)
  console.log('remainder:', x % y)
}
