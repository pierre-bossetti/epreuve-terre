const inputNumber = process.argv[2];
let nombrePremier;
let diviseurs = 1;
let i = 0;

const primeNumber = function (number) {
  while (i < inputNumber) {
    if ((number / i) % 1 == 0) {
      diviseurs++;
      i++;
    } else {
      i++;
    }
  }
  if (inputNumber < 0) {
    console.log('Saisi un nombre positif stp.');
  } else if (inputNumber == 0 || inputNumber == 1) {
    console.log(`Non, ${inputNumber} n'est pas un nombre premier`);
  } else if (diviseurs <= 2) {
    return `Oui, ${inputNumber} est un nombre premier.`;
  } else if (diviseurs > 2) {
    return `Non, ${inputNumber} n'est pas un nombre premier.`;
  }
};
console.log(primeNumber(inputNumber));
