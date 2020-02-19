/**
 * Closure: Anything declared inside of a function remains private (unless I expose it by returning it). We can use a pattern
 * called IIFE (Immediately Invoked Function Expression) to import a script on the page without creating global variables.
 *
 * This prevents the so-called "global namespace pollution".
 */

/* An IIFE is an anonymous function that gets executed as soon as it is declared */
;(function() {
  let a = 2
  alert(a) // the variable is used and then lost at the end of the IIFE, so no global variables on the page!
})()

/**
 * Function declaration: defining functions the usual way. This is subject to hoisting
 */
console.log(sum(2, 3))
function sum(x, y) {
  return x + y
}

/**
 * Function expression: we declare an anonymous function and save it in a variable. This is not subject to hoisting, so
 * we must declare it *before* using it!
 */
let sum = function(x, y) {
  return x + y
}
sum(2, 3)

/**
 * Callback functions: functions can be passed as parameters of other functions.
 * This is especially useful with asynchronous behavior.
 */

ask('Do you like JavaScript?', yes, no)

function ask(question, yes, no) {
  if (confirm(question)) {
    yes()
  } else {
    no()
  }
}

function yes() {
  console.log('Very good!')
}

function no() {
  console.log('Too bad...')
}

/**
 * Arrow functions: they look alot like the mathematical definition of a function:
 * sum: (x, y) -> x + y
 */

/** An arrow function is declared like a function expression (so no hoisting),
 * and a 'fat arrow' instead of the keyword 'function'. */
let sum = (x, y) => {
  return x + y
}

/**
 * When the functions does one thing, and that thing is returning something, we can omit the brackets and the return statement
 */
let sum = (x, y) => x + y

/**
 * When there's only one parameter, without 'decorations' (such as a default value), we can omit parentheses
 */
let square = x => x * x

/**
 * With no parameters we still need to put a pair of parentheses
 */
let shout = () => alert('YAWP!')

/**
 * There is a special word called 'this', which represents the current context.
 * Functions don't guarantee that the 'this' they use is the same we have outside of the function
 */
console.log(this)
function sum(x, y) {
  console.log(this) // could be different from the outer 'this'!
  return x + y
}

/**
 * An easy solution is using a 'that' variable that keeps the value consisten
 */
const that = this
console.log(that)
function sum(x, y) {
  console.log(that) // it's the same value
  return x + y
}

/**
 * Arrow functions are automatically bound to the outer context,
 * which means that the outer 'this' is the same as the inner 'this' without hacks
 */
console.log(this)
let sum = (x, y) => {
  console.log(this) // it's the same value
  return x + y
}
