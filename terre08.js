const inputNumber = process.argv[2];
const power = process.argv[3];
let numberPowered = 0;

const power = function (inputNumber, power) {
  const x = inputNumber;
  let i = 0;
  while (i < power - 1) {
    numberPowered = inputNumber * x;
    inputNumber = numberPowered;
    i++;
  }
  return numberPowered;
};

if (power < 0) {
  console.log("L'exposant ne peut être négatif.");
} else if (inputNumber == 0 && power == 0) {
  console.log(1);
} else {
  console.log(power(inputNumber, power));
}
