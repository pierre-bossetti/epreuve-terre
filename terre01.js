var fullPath = process.argv[1];
let i = 0;
let string = '';

while (fullPath[i] != '.') {
  i++;
}

while (fullPath[i] != '/') {
  i--;
}
i++;

while (fullPath[i]) {
  string += fullPath[i];
  i++;
}

console.log(string);
