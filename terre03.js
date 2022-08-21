const alphabetArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
let alphabetText = '';
const inputLetter = process.argv[2];
const stringLength = function (stringLength) {
  let i = 0;
  for (i = 0; stringLength[i]; i++) {}
  return i;
};

for (let i = 0; alphabetArray[i]; i++) {
  if (inputLetter <= alphabetArray[i]) {
    alphabetText += alphabetArray[i];
  }
}

if (!inputLetter || stringLength(inputLetter) > 0) {
  console.log('Saisi une SEULE lettre stp.');
} else {
  console.log(alphabetText);
}
