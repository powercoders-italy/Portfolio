let id = setInterval(() => console.log('Yo'), 1000)

console.log('Hello world!')

// clearInterval(id)

$.get(
  'https://swapi.co/api/people/',
  function success(response) {
    let id = response.data[0].id
    $.get(
      `https://swapi.co/api/people/${id}`,
      function success(response) {
        console.log(response.data)

        // in here
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

let promise1 = $.get('https://swapi.co/api/people/')
// thenable object
promise1.then(function success(response) {
  let id = response.data[0].id
  let promise2 = $.get(`https://swapi.co/api/people/${id}`)
  promise2.then(function success(response) {
    console.log(response.data)
  })
  promise2.catch(function failure(error) {
    console.error(error)
  })
})
promise1.catch(function failure(error) {
  console.error(error)
})
