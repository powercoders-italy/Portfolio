/**
 * Arrays: collections of orderered elements (not sorted, just in an exact order)
 */

//         0  1  2  3  4
let arr = [1, 2, 3, 4, 5]
arr[0]
arr[1] = 6
arr[arr.length - 1]

/**
 * Objects: collections of key-value pairs (also called associative arrays)
 */
let obj = {
  key1: 'value1',
  key2: 2,
}

// it is easy to perform all CRUD operations on an object
let obj = {}
obj.key // READ
obj.key = 'value' // CREATE
obj.key = 'anotherValue' // UPDATE
delete obj.key // DELETE

// access properties through dot notation
obj.key1
obj.key2 = 'something else'
delete obj.key1
// access properties through bracket notation
obj['key1']
obj['key2'] = 'something else'
delete obj['key2']
// bracket notation is useful especially when you don't know the property name in advance
let key = prompt('What do you want?')
obj[key]

// objects can be iterated with the for..in loop (not the for..of!)
for (let key in obj) {
  console.log(key, obj[key])
}

/**
 * Passing by reference / by value
 */
// primitive values, such as numbers, are passed and copied by value
let a = 2
let b = a
a === b // the values are equal

// if I change one variable, the other remains unchanged because they are different variables
a = 3 // b = 2

// objects are passed and copied by reference
let x = { a: 1, b: 2 }
let y = x
x === y // the two variables point to the same object

// if I change a property from the object, the other is changed too because in fact it's the same object!
x.a = 3 // y.a === 3

// two equal objects are not the same object
let x = { a: 1, b: 2 }
let y = { a: 1, b: 2 }
x !== y // not the same object
x.a === y.a // ... but same property values
x.b === y.b

// if I change a property from an object, the other remains unchanged because it's a different object
x.a = 3 // y.a === 1

/**
 * Merging objects together
 */
let obj1 = { a: 1, b: 2 }
let obj2 = { b: 3, c: 4 }
let obj3 = { d: 5 }

// every object is merged into the first one, which is then returned
let merged = Object.assign(obj1, obj2, obj3)
merged === obj1 // the returned object is a reference to the same object that was merged

/**
 * Cloning objects
 */
let obj = { a: 1, b: 2 }

// I could clone the properties one by one...
let clone = {}
clone.a = obj.a
clone.b = obj.b

// ... or I can loop over the properties and copy them in a more generic way...
let clone = {}
for (let key in obj) {
  clone[key] = obj[key]
}

// ... or I can use the Object.assign in a special way
let clone = Object.assign({}, obj)

/**
 * Array destructuring
 */
let array = [1, 2, 3, 4]
// you can define variables holding values of an array in one line
let [firstElement, secondElement, thirdElement] = array
// ... which is the same as this:
// let firstElement = array[0]
// let secondElement = array[1]
// let thirdElement = array[2]
// the spread operator creates an array with all the other elements
let [firstElement, ...rest] = array
// you can even use the spread operator in a creative way to make clones!
let clone = [...array]

/**
 * Object destructuring
 */
let obj = { a: 1, b: 2, c: 3 }
// objects behave in a similar way
let { a: firstElement, b } = obj
// ... which is the same as this:
// let firstElement = obj.a
// let b = obj.b
// the spread operator creates an object with all other properties
let { a: first, ...rest } = obj
// even with objects you can even use the spread operator in a creative way to make clones!
let clone = { ...obj }

/**
 * Shallow clones
 *
 * If you try to clone a complex object, that has object or array properties,
 * the copy will be a 'shallow' one: primitive values are copied, but objects and arrays are
 * just reference to the original properties!
 */
let user = {
  name: 'Antony',
  age: 37,
  measures: { height: 180, weight: 79 },
  students: ['Zubair', 'Shahzaib'],
}
let clone = { ...user }

clone.measures === user.measures // they are the same object!
clone.students === user.students // they are the same array!

// it's not easy to make a 'deep' clone: one (incomplete) example could be the following:
function deepClone(obj) {
  let clone = { ...obj }
  for (let key in clone) {
    let value = clone[key]
    if (Array.isArray(value)) {
      clone[key] = [...value]
    } else if (typeof value === 'object') {
      clone[key] = deepClone(value)
    }
  }
  return clone
}

/**
 * Methods: objects can also have behaviour
 */
let user = {
  name: 'Antony',
  age: 37,

  // this is a method
  speak(who) {
    console.log(`Hi ${who}, I'm ${this.name} and I'm ${this.age} years old.`)
  },
}

let student = {
  name: 'Zubair',
  age: '28',
}

student.speak = user.speak // thanks to the 'this' property, an object can borrow methods from other objects!

// constructor function: the old way to create objects of a same type
function User(name, age) {
  this.name = name
  this.age = age
  this.speak = function(who) {
    console.log(`Hi ${who}, I'm ${this.name} and I'm ${this.age} years old.`)
  }
}

// class: this is the new way
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getAge() {
    return this.age
  }

  speak(who) {
    console.log(`Hi ${who}, I'm ${this.name} and I'm ${this.age} years old.`)
  }
}

// classes support inheritance: Woman inherits all behaviour from Person, and can add or override behaviour
class Woman extends Person {
  getAge() {
    return this.age > 25 ? 20 : this.age
  }
}

let person = new Person('Antony', 37)
person.speak('class') // Hi class, I'm Antony and I'm 37 yars old.
person.getAge() // 37

let woman = new Woman('Giada', 26)
woman.speak('class') // Hi class, I'm Giada and I'm 26 yars old.
woman.getAge() // 20
