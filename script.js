/* The next line will show a popup message */
// alert('Hello'); // see? it works!

const FIRST_NAME = 'Matteo Antony';
const LAST_NAME = 'Mistretta';
const SEPARATOR = ' ';

// declare a variable named "fullName"
// its value should be your first name <SPACE> your last name
// the result should be a concatenation of the previous constants
// e.g. "Matteo Antony Mistretta"

let fullName = FIRST_NAME + SEPARATOR + LAST_NAME;

const myAddress = 'Via Val Della Torre, 39\n10149 Torino (TO)\nItaly';

/*
  An address usually consists of street name, civic number, zip code,
  city, province, and country.

  Declare a constant for every piece of the address and then concatenate all
  in a multiline string called 'address'.

  The address variable should have the same shape as 'myAddress'.
*/

const streetName = 'Via Val Della Torre'
const civicNumber = '39'
const zipCode = '10149'
const city = 'Turin'
const province = 'TO'
const country = 'Italy'

const address = streetName + ', ' + civicNumber + '\n' + zipCode + ' ' + city + ' (' + province + ')\n' + country

console.log(myAddress + '\n\n' + address)

// let admin;
// let name = "John";
// admin = name;
// alert(admin);

// let earth;
// let visitor;

const newAddress = `${streetName}, ${civicNumber}
${zipCode} ${city} (${province})
${country}`

console.log(newAddress)

// build your own CV:
// your CV should have your work experience, your studies,
// your soft skills and the languages that you speak. All of these should be
// variables that you can concatenate into a single 'cv' variable.

const workExperience = "I'm a software engineer, that's all you need to know."
const studies = 'I studied a lot, but only the wrong stuff.'
const softSkills = 'I can do soft drinks.'
const languages = `
- Italian
- English
- JavaScript.
`
const hobbies = 'Working hard all the time.'

const hr = '--------------------'

let cv = `
WORK:        ${workExperience}
${hr}
STUDIES:     ${studies}
${hr}
SOFT SKILLS: ${softSkills}
${hr}
LANGUAGES:   ${languages}
${hr}
HOBBIES:     ${hobbies}
`

console.log(cv)
