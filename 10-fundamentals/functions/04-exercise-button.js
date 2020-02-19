/**
 * Button: Build an ASCII button, given the number of rows and columns (and maybe also the symbol you want to print).
 *
 * *****
 * *****
 * *****
 *
 * HINT: The problem can be split into multiple problems, each encapsulated in its own function:
 * 1. how to build one row?
 * 2. how to repeat the process?
 */

console.log(buildButton(3, 5))

/* First problem: build a row by concatenating asterisks (or any other symbol) up to the number of columns */
function buildRow(columns, symbol = '*') {
  let row = ''
  for (let i = 0; i < columns; i++) {
    row += symbol
  }
  return row
}

/* Second problem: concatenate rows together, separating them with a newline */
function buildButton(rows, columns, symbol = '*') {
  let button = ''
  for (let i = 0; i < rows; i++) {
    button += buildRow(columns, symbol) + '\n'
  }
  return button
}

/*
 * Empty button: Build an ASCII button, but this time asterisks only delimit the borders and the rest is spaces.
 *
 * ******
 * *    *
 * *    *
 * ******
 *
 * HINT: split the problem into multiple functions:
 *
 * 1. how to build a 'full' row
 * 2. how to build an 'empty' row
 * 3. how to build the whole button, knowing that:
 *    1. the first and last rows are always 'full'
 *    2. all other rows in between are always 'empty'
 */

console.log(buildEmptyButton(4, 6))

function buildEmptyButton(rows, columns, symbol = '*') {
  let button = ''
  button += buildFullRow(columns, symbol)
  for (let i = 1; i < rows - 1; i++) {
    button += buildEmptyRow(columns, symbol)
  }
  button += buildFullRow(columns, symbol)
  return button
}

function buildFullRow(columns, symbol = '*') {
  let row = ''
  for (let i = 0; i < columns; i++) {
    row += symbol
  }
  return row + '\n'
}

function buildEmptyRow(columns, symbol = '*') {
  let row = symbol
  for (let i = 1; i < columns - 1; i++) {
    row += ' '
  }
  return row + symbol + '\n'
}

/* A very creative way to build a row with just one line of code: */
for (var line = ''; line.length < 7; line += '*') {} // the 'var' makes the variable available outside of the 'for' loop
console.log(line)

/**
 * Build an ASCII triangle, given the number of rows. The width and position of the triangle should be automatically calculated.
 *
 *    *
 *   ***
 *  *****
 * *******
 *
 * HINT: the number of spaces is inversely proportional to the row number:
 *
 * 123*    lastRow 3 - row 0
 * 12***   lastRow 3 - row 1
 * 1*****  lastRow 3 - row 2
 * ******* lastRow 3 - row 3
 *
 * The number of asterisks is instead directly proportional to the row number:
 *    1    row 0 * 2 + 1 = 1
 *   123   row 1 * 2 + 1 = 3
 *  12345  row 2 * 2 + 1 = 5
 * 1234567 row 3 * 2 + 1 = 7
 */

console.log(buildTriangle(4))

function buildTriangle(rows) {
  let triangle = ''
  for (let i = 0; i < rows; i++) {
    triangle += buildTriangleRow(i, rows)
  }
  return triangle
}

function buildTriangleRow(i, rows) {
  let row = ''
  const lastRowIndex = rows - 1
  for (let j = 0; j < lastRowIndex - i; j++) {
    row += ' '
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    row += '*'
  }
  return row + '\n'
}
