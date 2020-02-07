/* even numbers from 2 to 10 using a for loop */
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   let isEven = i % 2 === 0
//   if (isEven) {
//     console.log(i);
//   }
// }

// let i = 1;
// while (i < 6) {
//   console.log(i * 2);
//   i++;
// }

// 0 1 2 3 4
// 2 4 6 8 10
// for (let i = 0; i < 5; i++) {
//   console.log((i + 1) * 2);
// }


// replace for with while
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// let num = prompt('Give me a number greater than 100');
// if (num > 100) {
//   console.log('Yay, thanks! Just what I wanted!');
// } else {
//   console.log('Please try again.');
// }

// stop:
// num > 100
// num == null
// num == ''

// !(a || b) = !a && !b
// !(a && b) = !a || !b
// !(num == null || num == '' || num > 100) = num != null && num != '' && num <= 100

// let num = prompt('Give me a number greater than 100');
// while (num && num <= 100) {
//   num = prompt('Please try again.');
// }
// console.log('Yay, thanks! Just what I wanted!');

// for (let attempts = 1; attempts < 100000; attempts++) {
//   let num = prompt('Give me a number greater than 100');
//   if (!num || num > 100) {
//     break;
//   }

//   console.log('Wrong number!', attempts, 'attempts made');
// }
// console.log('Yay, thanks! Just what I wanted!');

// let num = "0";
// for (let attempts = 1; attempts < 100000 && !(!num || num > 100); attempts++) {
//   num = prompt('Give me a number greater than 100');

//   if (num && num <= 100) {
//     console.log('Wrong number!', attempts, 'attempts made');
//   }
// }
// console.log('Yay, thanks! Just what I wanted!');

// while (true) {
//   let num = prompt('Give me a number greater than 100');
//   if (!num || num > 100) {
//     break;
//   }
//   console.log('Wrong number!');
// }
// console.log('Yay, thanks! Just what I wanted!');

// let num = prompt('Give me a number greater than 100');
// while (num && num <= 100) {
//   num = prompt('Please try again.');
// }
// console.log('Yay, thanks! Just what I wanted!');

// for (
//   let num = prompt('Give me a number greater than 100');
//   num && num <= 100;
//   num = prompt('Please try again.')
// ) { }
// console.log('Yay, thanks! Just what I wanted!');

/*

7x3:

*******
*******
*******

1x1:

*

7x1:

*******

7x3:

*******
*******
*******

*/

// const ROWS = 3;
// const COLUMNS = 7;
// const PATTERN = '*';

// let rectangle = '';
// // loops over rows
// for (let i = 0; i < ROWS; i++) {
//   let row = "";
//   // loops over columns
//   for (let j = 0; j < COLUMNS; j++) {
//     row += PATTERN;
//   }
//   // appends the newly created row to the rectangle
//   if (i < ROWS - 1) {
//     rectangle += row + '\n';
//   } else {
//     rectangle += row;
//   }
// }
// console.log(rectangle);

/*
Table for 1:   1   2   3   4   5   6   7   8   9  10
Table for 2:   2   4   6   8  10  12  14  16  18  20
Table for 3:   3   6   9  12  15  18  21  24  27  30
...
Table for 10: 10  20  30  40  50  60  70  80  90 100
...
*/


/*
*****
*****
*****
*/

// const ROWS = 3;
// const COLUMNS = 5;

// for (let i = 0; i < ROWS; i++) {

//   // START: print a single row
//   let row = '';
//   for (let j = 0; j < COLUMNS; j++) {
//     row = row + '*';
//   }
//   console.log(row);
//   // END

// }

// print all multiples of 20 from 0 to 100
// i = 0 20 40 60 80 100
// Zubair
for (let i = 0; i <= 100; i = i + 20) {
  console.log(i);
}

// i = 0  1  2  3  4  5
// p = 0 20 40 60 80 100
// Alex
for (let i = 0; i <= 5; i++) {
  console.log(i * 20);
}

// i = 0 1 2 3 4 5 6 7 8 9 10.. 100
// p = 0                        20. ..... 40...
// Yannick
for (let i = 0; i <= 100; i++) {
  let isDivisible = i % 20 === 0;
  if (isDivisible) {
    console.log(i);
  }
}

let i = 0
while (i <= 100) {
  if (i % 20 === 0) {
    console.log(i);
  }
  i++;
}

// print all multiples of 20 from 100 to 0
// i = 100 80 60 40 20 0
// Reverse Zubair
for (let i = 100; i >= 0; i -= 20) {
  console.log(i);
}