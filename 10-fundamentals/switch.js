// A, 2, 3, 4, 5, 6, 7, 8, 9, 10,  J,  Q,  K
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

// let card = '8'
// let points

// if (card === 'A') {
//   points = 1
// } else if (card === 'J') {
//   points = 11
// } else if (card === 'Q') {
//   points = 12
// } else if (card === 'K') {
//   points = 13
// } else {
//   points = Number(card)
// }

// console.log(card, points)

// let variable = condition ? value1 : value2

// let students = 20
// let label
// if (students === 1) {
//   label = 'student'
// } else {
//   label = 'students'
// }
// let label = students === 1 ? 'student' : 'students'
// let sentence = `We have ${students} ${label} in class`
// console.log(sentence)

// let a = 2 + 2

// if (a === 3) {
//   console.log('Too small!')
// } else if (a === 4) {
//   console.log('Exactly!')
// } else if (a === 5) {
//   console.log('Too large')
// } else {
//   console.log('No such value')
// }

// let a = 5

// switch (a) {
//   case 3:
//     console.log('Too small!')
//     break

//   case 4:
//     console.log('Exactly!')
//     break

//   case 5:
//     console.log('Too large')
//     break

//   default:
//     console.log('No such value')
// }

// let card = '5'
// let points

// switch (card) {
//   case 'A':
//     points = 1
//     break

//   case 'J':
//     points = 11
//     break

//   case 'Q':
//     points = 12
//     break

//   case 'K':
//     points = 13
//     break

//   default:
//     points = Number(card)
// }

// console.log(card, points)

function detectBrowserWithSwitch(browser) {
  // let browser = navigator.userAgent.gimmeBrowser();
  // let browser = prompt('What browser do you have?')

  switch (browser) {
    case 'Edge':
      return "You've got the Edge!"

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      return 'Okay we support these browsers too'

    default:
      return 'We hope that this page looks ok!'
  }
}

function detectBrowserWithIfs(browser) {
  if (browser === 'Edge') {
    return "You've got the Edge!"
  }

  if (
    browser === 'Chrome' ||
    browser === 'Firefox' ||
    browser === 'Safari' ||
    browser === 'Opera'
  ) {
    return 'Okay we support these browsers too'
  }

  return 'We hope that this page looks ok!'
}

// const answer = detectBrowserWithSwitch('Edge');
// console.log(answer);

function gimmeAWithIfs() {
  let a = +prompt('a?', '')

  if (a == 0) {
    alert(0)
  }
  if (a == 1) {
    alert(1)
  }

  if (a == 2 || a == 3) {
    alert('2,3')
  }
}

function gimmeAWithSwitch() {
  let a = 'initial input'

  while (a != null && a !== '') {
    a = prompt('a?', '')
    let num = +a

    switch (num) {
      case 0:
        alert(0)
        break

      case 1:
        alert(1)
        break

      case 2:
      case 3:
        alert('2,3')
        break
    }
  }
}
