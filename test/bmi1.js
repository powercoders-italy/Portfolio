const height = +prompt("What's your height in meters?");
const weight = +prompt("What's your weight in kilograms?");

const bmi = weight / height ** 2;
if (bmi < 18.5) {
  console.log(bmi, "underweight");
} else if (bmi >= 18.5 && bmi < 24.5) {
  console.log(bmi, "normal");
} else {
  console.log(bmi, "overweight");
}
