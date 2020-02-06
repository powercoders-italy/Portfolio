// generic form
while (condition) {
  body
}

// example
let happy = true
while (happy) {
  clapYourHands();
  if (learningJavaScript) {
    happy = false;
  }
}

// special form
initialization
while (condition) {
  body
  increment
}

// example
let i = 0;
while (i < 10) {
  console.log('yay!');
  i++;
}

// for loop
for (initialization; condition; increment) {
  body
}

// example
for (let i = 0; i < 10; i++) {
  console.log('yay!');
}

for (let happy = true; happy; ) {
  clapYourHands();
  if (studyingJavaScript) {
    happy = false;
  }
}
