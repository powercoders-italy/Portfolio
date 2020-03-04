/**
 * function declaration
 * strengths: hoisting
 */
myFunc(params)

function myFunc(params) {
  body

  return something
}

/**
 * function expression
 * strengths: needed sometimes (e.g. callbacks)
 * weaknesses: no hoisting
 */
let myFunc = function(params) {
  body

  return something
}
myFunc(params)

// event handler: a type of callback
button.onclick = function() {
  console.log('Clicked!')
}

// another type of callback
setTimeout(function() {
  console.log('Delayed')
}, 1000)

/**
 * arrow function
 * strengths: maintains context (this), prettier
 * weaknesses: no hoisting
 */
let myFunc = params => {
  body
  return something
}
myFunc(params)

// an arrow function is nicer, more concise
function sum(a, b) {
  return a + b
}
let sum = (a, b) => a + b
sum(2, 3)

// arrow functions make things easier (e.g. currying)
function sum(a) {
  return function(b) {
    return a + b
  }
}
let sum = a => b => a + b
sum(2)(3)

// currying is about just changing some characters
let sum = (a, b) => a + b
let sum = a => b => a + b

/* Task about arrow functions on javascript.info */

// BEFORE
ask(
  'Do you agree?',
  function() {
    alert('You agreed.')
  },
  function() {
    alert('You canceled the execution.')
  }
)

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

// AFTER
let ask = (question, yes, no) => (confirm(question) ? yes() : no())

ask(
  'do you agree?',
  () => alert('you agreed'),
  () => alert('you canceled the execution.')
)
