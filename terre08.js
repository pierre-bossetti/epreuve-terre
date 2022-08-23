const inputNumber = process.argv[2];
const power = process.argv[3];
let numberSquared = 0;

const square = function (inputNumber, power) {
  const x = inputNumber;
  let i = 0;
  while (i < power - 1) {
    numberSquared = inputNumber * x;
    inputNumber = numberSquared;
    i++;
  }
  return numberSquared;
};

if (power < 0) {
  console.log("L'exposant ne peut être négatif.");
} else if (inputNumber == 0 && power == 0) {
  console.log(1);
} else {
  console.log(square(inputNumber, power));
}
