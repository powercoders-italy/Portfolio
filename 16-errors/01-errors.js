function generateError() {
  // here
  let connection = new MySqlConnection()

  try {
    console.log('Before errors')

    connection.open()
    // connection = null

    // here there will be errors...
    lalala

    console.log('After errors')
  } catch (err) {
    console.log('Error:', err)
  } finally {
    console.log('Finally!')
    if (connection != null) {
      connection.close()
    }
  }

  // here
  console.log('After the try block')
}

let a = +prompt('Give me the first number')
let b = +prompt('Give me the second number')

try {
  console.log(sum(a, b))
} catch (err) {
  console.log(err)
  // throw new Error('Input Error: ' + err.message)
}

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Values should be numbers')
  }

  return a + b
}

function f() {
  try {
    do something
    return 42
  } catch (err) {
    handle err
  } finally {
    cleanup code
  }
}

let answer = f()