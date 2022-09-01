const number1 = process.argv[2] / 1;
const number2 = process.argv[3] / 1;
const number3 = process.argv[4] / 1;
let numbers = [number1, number2, number3];

const sorted = function (list) {
  if (numbers[0] < numbers[1] && numbers[1] < numbers[2]) {
    return true;
  } else {
    return false;
  }
};

let i = 0;
while (process.argv[i]) {
  i++;
}

const listVerification = sorted(numbers);

if (i != 5) {
  console.log('erreur.');
} else if (listVerification == false) {
  console.log('Pas triée !');
} else if (listVerification == true) {
  console.log('Triée !');
}
