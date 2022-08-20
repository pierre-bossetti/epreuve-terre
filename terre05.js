const number1 = process.argv[2];
const number2 = process.argv[3];

if (number2 == 0 || number2 > number1) {
  console.log('erreur.');
} else {
  console.log(`résultat: ${Math.floor(number1 / number2)}`);
  console.log(`reste: ${number1 % number2}`);
}
