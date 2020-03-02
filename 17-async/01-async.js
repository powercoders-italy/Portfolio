let id = setInterval(() => console.log('Yo'), 1000)

console.log('Hello world!')

// clearInterval(id)

// callback hell
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

// thenable object
$.get('https://swapi.co/api/people/')
  // resolve
  .then(response => {
    let id = response.data.results[0].id
    return $.get(`https://swapi.co/api/people/${id}`)
  })
  .then(response => console.log(response.data))
  // reject
  .catch(error => console.error(error))
