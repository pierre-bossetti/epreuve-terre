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

for (let i = 0; i < alphabetArray.length; i++) {
  if (inputLetter <= alphabetArray[i]) {
    alphabetText += alphabetArray[i];
  }
}
console.log(alphabetText);
