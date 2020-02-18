let user = {
  name: 'Antony',
  Antony: 'person',
  age: 37,
  isAdmin: true,
  'likes pokemons': true,
}

let key = prompt('WDYW?')

user[user.name]
user.name
user['name']
user[key]

if (key === 'name') {
  console.log(user.name)
} else if (key === 'age') {
  console.log(user.age)
}

// factory function
function createUser(name, age) {
  let user = { name, age }
  return user
}
createUser('Antony', 37)
createUser('Antony', 37)

/* Constructor function */
function User(name, age) {
  // this = {}
  this.name = name
  this.age = age
  // return this
}

let user = new User('Antony', 37)

// let clone = {}
// for (let key in user) {
//   clone[key] = user[key]
// }

let clone = Object.assign({}, user)

console.log(this)
function sayHello() {
  console.log(this)
}

// let that = this
// console.log(that)
// function sayHello() {
//   console.log(that)
// }

// ;(function sayHello() {
//   console.log(this)
// }.bind(this))

// console.log(this)
// let sayHello = () => console.log(this)
