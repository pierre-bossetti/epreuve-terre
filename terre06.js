const string = process.argv[2];
let reverseString = '';

for (let i = string.length - 1; i >= 0; i--) {
  reverseString += string[i];
}

if (process.argv.length > 3) {
  console.log('erreur. écris uniquement un argument stp.');
} else {
  console.log(reverseString);
}
