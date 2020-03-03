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
  function success(response) {
    let id = response.data.results[0].id
    $.get(
      `https://swapi.co/api/people/${id}`,
      function success(response) {
        // this is the last statement that will be executed
        console.log(response.data)
      },
      function failure(error) {
        console.log(error.message)
      }
    )
  },
  function failure(error) {
    console.log(error.message)
  }
)

// statemements here happen before anything inside the $.get

/**
 * A promise is a "thenable" object
 */
$.get('https://swapi.co/api/people/')
  // it can resolve
  .then(response => {
    let id = response.data.results[0].id
    return $.get(`https://swapi.co/api/people/${id}`)
  })
  .then(response => console.log(response.data))
  // it can reject
  .catch(error => console.error(error))
