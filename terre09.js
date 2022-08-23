const number = process.argv[2];
let x = 0;

const squareRoot = function (number) {
  while (x * x != number) {
    if (x == number) {
      return "Ce chiffre ne dispose pas d'une racine carrée en entier positif";
    } else {
      x++;
    }
  }
  return x;
};

if (number < 0) {
  console.log(NaN);
} else {
  console.log(squareRoot(number));
}
