/* global $, fs, collection */

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

let answer = 52

new Promise((resolve, reject) => {
  if (answer > 50) {
    reject(new Error(`${answer} should be less than 50`))
  } else {
    resolve(`The number chosen was ${answer}`)
  }
})
  .then(number => console.log(number))
  .catch(err => console.error('Oops, something went wrong:', err))

/**
 * "Promisify" an asynchronous function
 */
let promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('A second has passed')
  }, 1000)
})
promise.then(result => console.log(result))

new Promise((resolve, reject) => {
  fs.readFile('myfile.txt', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
  .then(file => console.log(file))
  .catch(err => console.error(err))

let myReadFile = util.promisify(fs.readFile)
myReadFile('myfile.txt')
  .then(file => console.log(file))
  .catch(err => console.error(err))

new Promise((resolve, reject) => {
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], (err, result) => {
    if (err) {
      reject(err)
    } else {
      resolve(result)
    }
  })
})

let myInsertMany = util.promisify(collection.insertMany)

Promise.all([$.get(url1), $.get(url2)]).then(([result1, result2]) => {
  console.log(result1, result2)
})

/**
 * async/await
 */

async function fetchLuke() {
  try {
    let response1 = await fetch('https://swapi.co/api/people/')
    let body1 = await response1.json()
    console.log(body1)
    let response2 = await fetch(body1.results[0].url)
    let body2 = await response2.json()
    console.log(body2)
  } catch (err) {
    console.error(err)
  } finally {
    console.warn('Cleanup')
  }
}

async function whatever() {
  let a = 1
  let b = 2
  let sum = a + b
  let result = await $.get(url)

  await new Promise(resolve => {
    setTimeout(() => resolve('hello'), 1000)
  })

  console.log(result)
}

async function getAnswer() {
  let [data1, data2] = await Promise.all([$.get(url1), $.get(url2)])
  return {
    answer1: data1,
    answer2: data2,
  }
}

getAnswer().then(obj => console.log(obj))
