let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete' // upsert (update & insert)
delete user.name
user.name = null
console.log(user)

function isEmpty(obj) {
  let isEmpty = true

  for (let key in obj) {
    isEmpty = false
  }

  return isEmpty
}

let schedule = {}
console.log(isEmpty(schedule))
schedule['8:30'] = 'get up'
console.log(isEmpty(schedule))

function sumSalaries(obj) {
  let sum = 0

  for (let key in obj) {
    let salary = obj[key]
    sum += salary
  }

  return sum
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}
console.log(sumSalaries(salaries) === 390)

function multiplyNumeric(obj) {
  for (let key in obj) {
    let value = obj[key]
    obj[key] = typeof value === 'number' ? value * 2 : value

    // let value = obj[key]
    // if (typeof value === 'number') {
    //   obj[key] *= 2
    // }
  }

  return obj
}

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
}
console.log(multiplyNumeric(menu))

console.log(this)
let that = this
function sayHi() {
  console.log(that)
}
const sayHi = () => console.log(this)

let teacher = {
  name: 'Antony',
  sayHi() {
    console.log(`Hi, this is ${this.name}!`)
  },
}

let student = {
  name: 'Noor',
}
