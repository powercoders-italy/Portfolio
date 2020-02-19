/* The 'if-else' statement has the following structure: */
if (condition) {
  bodyIfConditionIsTrue
} else {
  bodyIfConditionIsFalse
}

/* The 'while' loop in its generic form is like this: */
while (condition) {
  bodyRepeatedWhileConditionIsTrue
}
bodyAfterConditionBecomesFalse
/* there is no 'else' in here, the 'else' is just getting out of the loop and resuming execution */

/* Example: */
let happy = true // the condition starts true, but should eventually become false
while (happy) {
  clapYourHands()
  if (learningJavaScript) {
    happy = false // that's when we decide that the condition becomes false. This will break the loop
  }
}

/**
 * The 'while' loop has also a 'special form', a pattern that is widely used:
 */
initializationOfVariable
while (conditionOnVariable) {
  repeatedBody
  updateOfVariable // this update will eventually make the condition false
}

/* A common example: */
let i = 0
while (i < 10) {
  console.log('yay!')
  i++ // this variable starts with 0 and increases until it becomes 10, thus breaking the loop
}

/**
 * The 'for' loop is just sugar syntax for this 'special form', which isolates the body with the rest:
 */
for (initialization; condition; update) {
  body
}

/* The example above, transformed into a 'for' loop */
for (let i = 0; i < 10; i++) {
  console.log('yay!')
}

/**
 * 'for' loops can be used even in the generic form, but they are ugly and difficult to read:
 */
for (let happy = true; happy; ) {
  clapYourHands()
  if (studyingJavaScript) {
    happy = false
  }
}

/* and now... */
while (!learned) {
  practice()
}
