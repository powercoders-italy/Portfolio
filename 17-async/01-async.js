/* global $ */

/**
 * Asynchronous behavior: execution is not stopped by an asynchronous function
 */
let id = setInterval(() => console.log('This comes next'), 1000)
console.log('This comes first')
// you can even stop the async function on the run
clearInterval(id)

/**
 * Using only callback functions leads to a "callback hell"
 */
$.get(
  'https://swapi.co/api/people/',
  function success(data1) {
    $.get(
      data1.results[0].url,
      function success(data2) {
        // this is the last statement that will be executed
        console.log(data2)
      },
      function failure(error2) {
        console.log(error2.message)
      }
    )
  },
  function failure(error1) {
    console.log(error1.message)
  }
)

// statemements here happen before anything inside the $.get

/**
 * A promise is a "thenable" object
 */

$.get('https://swapi.co/api/people/')
  // it can resolve
  .then(data1 => $.get(data1.results[0].url))
  .then(data2 => console.log(data2))
  // it can reject
  .catch(error => console.error(error))
  .finally(() => console.warn('Cleanup'))

/**
 * Fetch API
 */
fetch('https://swapi.co/api/people/')
  .then(response1 => response1.json())
  .then(body1 => fetch(body1.results[0].url))
  .then(response2 => response2.json())
  .then(body2 => console.log(body2))
