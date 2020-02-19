// if statement
if (condition) {
  body
} else {
  body
}

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

for (let happy = true; happy;) {
  clapYourHands();
  if (studyingJavaScript) {
    happy = false;
  }
}

while (!learned) {
  practice()
}

// display all multiples of 20 from 0 to 100

for (let i = 20; i < 100; i++) {
  console.log('Let the body hit the floor');
}
