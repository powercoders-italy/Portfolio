/**
 * Context: Devil May Cry - Stylish Rankings
 *
 * Create a function that, given the amount of damage you inflict to enemies,
 * will return the related stylish ranking string.
 *
 * 1 = Dull!
 * 5 = Cool!
 * 10 = Bravo!
 * 15 = Awesome!
 * 20 = Stylish!
 *
 * Hint: use the switch statement.
 */

console.log(getStylishRanking(15))
function getStylishRanking(damage) {
  switch (damage) {
    case 1:
      return 'Dull!'
    case 5:
      return 'Cool!'
    case 10:
      return 'Bravo!'
    case 15:
      return 'Awesome!'
    case 20:
      return 'Stylish!'
  }
}

/**
 * Code Review: we discussed about different attempts made in class and tried fixing them.
 */

/* First Attempt: */

/* BEFORE: */
let = damage
function Dvc() {
  if (((damage = 0), (damage = 1))) {
    return 'Dull!'
  }

  if ((damage = [2 - 5])) {
    return 'Cool!'
  }
}
/* END */

/* AFTER: */
function getStylishRanking(damage) {
  if (damage === 0 || damage === 1) {
    return 'Dull!'
  }

  if (damage >= 2 && damage <= 5) {
    return 'Cool!'
  }
}
/* END */

/* Second Attempt: */

/* BEFORE: */
let amonth = 1

switch (amonth) {
  case 'Dull':
    damage = 1
    break
  case 'Cool':
    damage = 5
    break
  case 'Bravo':
    damage = 10
    break
  case 'Awesome':
    damage = 15
    break
  case 'Stylish':
    damage = 20
    break
  default:
    alert('not really')
}
/* END */

/* AFTER: */
function getStylishRanking(amount) {
  let ranking

  switch (amount) {
    case 1:
      ranking = 'Dull!'
      break
    case 5:
      ranking = 'Cool!'
      break

    default:
      alert('not really')
  }

  return ranking
}
/* END */

/* Third attempt: */

/* BEFORE: */
let Rankings
let Compliment
switch ('1') {
  case '1':
    compliment = 'Dull!'
    Rankings = '1!'
    break

  case '5':
    compliment = 'Cool!'
    break
}
/* END */

/* AFTER: */
function getStylishRanking(rankings) {
  let compliment

  switch (rankings) {
    case 1:
      compliment = 'Dull!'
      break

    case 5:
      compliment = 'Cool!'
      break
  }

  return compliment
}
/* END */

function getStylishRanking(damage) {
  switch (damage) {
    case 1:
      return 'Dull!'

    case 5:
      return 'Cool!'

    case 10:
      return 'Bravo!'
  }
}
