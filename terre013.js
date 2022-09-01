const number1 = process.argv[2] / 1;
const number2 = process.argv[3] / 1;
const number3 = process.argv[4] / 1;
let numbers = [];
const elements = 3;

console.log(number1, typeof number1);
//Ajoute le premier chiffre
for (let i = 0; i < 1; i++) {
  if (number1 < number2 && number1 < number3) {
    numbers[i] = number1;
  } else if (number2 < number1 && number2 < number3) {
    numbers[i] = number2;
  } else if (number3 < number1 && number3 < number2) {
    numbers[i] = number3;
  }
}

//Ajoute le deuxième chiffre
for (let i = 1; i < 2; i++) {
  if (
    (number1 < number2 && number1 > number3) ||
    (number1 > number2 && number1 < number3)
  ) {
    numbers[i] = number1;
  } else if (
    (number2 < number1 && number2 > number3) ||
    (number2 > number1 && number2 < number3)
  ) {
    numbers[i] = number2;
  } else if (
    (number3 < number1 && number3 > number2) ||
    (number3 > number1 && number3 < number2)
  ) {
    numbers[i] = number3;
  }
}
//Ajoute le troisième chiffre
for (let i = 2; i < 3; i++) {
  if (number1 > number2 && number1 > number3) {
    numbers[i] = number1;
  } else if (number2 > number1 && number2 > number3) {
    numbers[i] = number2;
  } else if (number3 > number1 && number3 > number2) {
    numbers[i] = number3;
  }
}

if (number1 === number2 && number2 === number3 && number1 === number3) {
  console.log('erreur.');
} else {
  console.log(numbers[(elements + 1) / 2 - 1]);
}

console.log(numbers);
