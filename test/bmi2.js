app();

function app() {
  while (true) {
    const height = +prompt("What's your height in meters?");
    if (!height) return;

    const weight = +prompt("What's your weight in kilograms?");
    if (!weight) return;

    const bmi = calculateBmi(height, weight);

    if (bmi < 18.5) {
      console.log(bmi, "underweight");
    } else if (bmi >= 18.5 && bmi < 24.5) {
      console.log(bmi, "normal");
    } else {
      console.log(bmi, "overweight");
    }
  }
}

function calculateBmi(height, weight) {
  return weight / height ** 2;
}
