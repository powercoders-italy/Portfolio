let _ = require('lodash')

// let toKebabCase = function(str) {
//   return _.kebabCase(str)
// }

// let toKebabCase = str => _.kebabCase(str)

// let toKebabCase = _.kebabCase

console.log(toKebabCase('Hello world!'))

function toKebabCase(str) {
  return _.kebabCase(str)
}

console.log(`
${_.padStart('1', 3, '*')}
${_.padStart('10', 3, '*')}
${_.padStart('100', 3, '*')}
`)
