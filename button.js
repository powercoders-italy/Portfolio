/*

*****
*****
*****

*/

// 1. how to build one row?
// 2. how to repeat the process?

function buildRow(columns) {
  let row = '';
  for (let i = 0; i < columns; i++) {
    row += '*';
  }
  return row;
}

function buildButton(rows, columns) {
  let button = '';
  for (let i = 0; i < rows; i++) {
    button += buildRow(columns) + '\n';
  }
  return button;
}

// let row = buildRow(5);
// console.log(row);

let button = buildButton(3, 5);
console.log(button);

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