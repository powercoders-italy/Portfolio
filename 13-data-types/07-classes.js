let person = {
  firstName: 'Antony',
  lastName: 'Mistretta',
  shout() {
    console.log(this.firstName.toUpperCase())
  },
}

class Person {
  static type = 'Person'

  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getAge() {
    return this.age
  }

  setAge(age) {
    this.age = age
  }

  shout() {
    console.log(this.firstName.toUpperCase())
  }
}

class Woman extends Person {
  getAge() {
    return this.age > 20 ? 20 : this.age
  }
}

person.firstName = 'Matteo Antony'
person.shout()

person.getAge()
person.setAge(37)

person.age
person.age = 37
