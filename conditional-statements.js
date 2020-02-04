let age = 66;

let response;

if (age < 0) {
  response = 'You weren\'t even born!';
} else if (age < 18) {
  response = 'Too young';
} else if (age > 65) {
  response = 'Too old';
} else {
  response = 'Just the right age';
}

let response = age < 0
  ? 'You weren\'t even born!'
  : (age < 18
    ? 'Too young'
    : (age > 65
      ? 'Too old'
      : 'Just the right age'));

console.log(response);

let isAdult

if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}

let isYoung = age >= 18 ? false : true;
let isYoung = age < 18;

let isAdult = age >= 18;

let num = -3;
let plusTwo = (num >= 0) ? (num + 2) : (num - 2);

let plusTwo;

if (num >= 0) {
  plusTwo = num + 2;
} else {
  plausTwo = num - 2;
}

let age = 40;

let result1 = (age === 0 || (age > 18 && age < 65));
let result2 = (age > 18 && age < 65) || age === 0;
let result3 = age > 18 && (age < 65 || age === 0);

if (age < 0 || (age > 65 && age === 0)) {
  console.log('Too old or not even born');
} else if (age >= 18 && age < 50) { // 18 <= age < 50
  console.log('Adult');
} else {
  console.log('Dunno');
}