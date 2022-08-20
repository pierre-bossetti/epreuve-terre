const inputNumber = process.argv[2];

if (inputNumber % 2 == 0) {
  console.log('pair');
} else if (inputNumber % 2 > 0) {
  console.log('impair');
} else {
  console.log("Tu me la mettras pas à l'envers.");
}
