/**
 * An object is a collection of key-value pairs called 'properties'.
 */
let user = {
  name: 'Antony',
  age: 37,
  isAdmin: true, // use camelCase whenever possible
  Antony: 'person', // don't use PascalCase in property keys. It does no harm, but it's against common sense
  likes_pokemons: true, // snake_case is allowed too sometimes
  'likes pokemons': true, // don't put spaces or dashes in property keys. If you do, at least place them in quotes
}

console.log(user.name) // access a property with 'dot' notation
console.log(user['name']) // ...or with bracket notation
let key = prompt('What property do you want to see?')
console.log(user[key]) // bracket notation is useful especially when you don't know the property name in advance
// ...instead of just writing an if-else cascade
if (key === 'name') {
  console.log(user.name)
} else if (key === 'age') {
  console.log(user.age)
}
user[user.name] // you can come up with any crazy example, it will still work!

/**
 * You can create objects in series with a factory function. Objects created in this way will all have the same structure
 */
function createUser(name, age) {
  let user = { name, age }
  return user
}
let userA = createUser('Antony', 37)
let userB = createUser('Antony', 37)

console.log(userA !== userB) // two identical objects are not the same object
console.log(userA.name === userB.name && userA.age === userB.age) // ...even though their properties are the same

/**
 * You can also create objects through a Constructor function.
 * A constructor is a special function whose name (in PascalCase) represents the type of object you want to create.
 * Contructor functions are now superseded by classes, and prototypal inheritance is superseded by classical inheritance.
 */
function User(name, age) {
  // this = {} // the constructor implicitly initializes 'this' as an empty object
  this.name = name
  this.age = age
  // return this // ...and it implicitly returns it at the end of the function
}

/* You can check the hidden __proto__ property of this object: it's not Object anymore, it's User, whose __proto__ is Object! */
console.log(new User('Antony', 37))

/**
 * Object properties can be iterated over through the for..in loop
 */
for (let key in obj) {
  console.log(key, obj[key]) // the element being iterated is the property key, the value is taken with bracket notation
}

/**
 * A common example of looping properties could be cloning an object (creating an exact copy)
 */
let clone = {}
for (let key in obj) {
  clone[key] = obj[key]
}

/**
 * The Object.assign method merges objects together into the first parameter, which is also returned by the function:
 */
let merged = { a: 1 }
let mergeMe = { b: 2, c: 3 }
let mergeMeToo = { b: 4, d: 5 }
merged = Object.assign(merged, mergeMe, mergeMeToo)
console.log(merged) // { a: 1, b: 4, c: 3, d: 5} // same keys are overridden, left to right

/**
 * A simpler way to clone objects is using the Object.assign method in a special way: we merge the object to clone into a new object
 */
let clone = Object.assign({}, obj)
console.log(clone) // clone will be a new object, with all properties merged from obj
