const string = process.argv[2];
let reverseString = '';

for (let i = string.length - 1; i >= 0; i--) {
  reverseString += string[i];
}
console.log(reverseString);
