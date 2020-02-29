const arr = ['hello', 'world', 'how', 'are', 'you']

const firstItem = arr[0]
const secondItem = arr[1]
const thirdItem = arr[2]

const [firstItem, secondItem, thirdItem] = arr

const [firstItem, secondItem, ...rest] = arr

const clone = arr.slice(0)

const obj = { a: 1, b: 2, c: 3 }
let a = obj.a
let d = obj.b

const { a, b: d } = obj
const { a, ...rest } = obj
