/*

*****
*****
*****

*/

// 1. how to build one row?
// 2. how to repeat the process?

function buildRow(columns, symbol = '*') {
  let row = ''
  for (let i = 0; i < columns; i++) {
    row += symbol
  }
  return row
}

function buildButton(rows, columns, symbol = '*') {
  let button = ''
  for (let i = 0; i < rows; i++) {
    button += buildRow(columns, symbol) + '\n'
  }
  return button
}

// let row = buildRow(5);
// console.log(row);

let button = buildButton(3, 5)
console.log(button)

/*

******
*    *
*    *
******

*/

// 1. how to build a 'full' row
// 2. how to build an 'empty' row
// 3. how to build the whole button, knowing that:
//    1. the first and last rows are always 'full'
//    2. all other rows in between are always 'empty'

let line
for (line = ''; line.length < 7; line += '*') {}
console.log(line)

let line = ''
while (line.length < 7) {
  line += '+'
}
console.log(line)

/*

buildTriangle(rows)

      *
    * * *
  * * * * *
* * * * * * *

*/

let str = "Let's code together!"
