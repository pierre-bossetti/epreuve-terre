const string = process.argv[2];
let reverseString = '';

const stringLength = function (stringLength) {
  let i = 0;
  for (i = 0; stringLength[i]; i++) {}
  return i;
};

if (stringLength(process.argv) != 3) {
  console.log('erreur. écris uniquement un argument stp.');
} else {
  for (let i = stringLength(string) - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  console.log(reverseString);
}
