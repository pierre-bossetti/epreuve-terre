const inputNumber = process.argv[2];
const exposant = process.argv[3];
let tempNumber = 0;

const square = function (inputNumber, exposant) {
  const x = inputNumber;
  let i = 0;
  while (i < exposant - 1) {
    tempNumber = inputNumber * x;
    inputNumber = tempNumber;
    i++;
  }
  return tempNumber;
};

if (exposant < 0) {
  console.log("L'exposant ne peut être négatif.");
} else if (inputNumber == 0 && exposant == 0) {
  console.log(1);
} else {
  console.log(square(inputNumber, exposant));
}
