const string = process.argv[2];
const stringLength = function (stringLength) {
  let i = 0;
  for (i = 0; stringLength[i]; i++) {}
  return i;
};

if (!string || stringLength(process.argv) > 3 || !isNaN(string)) {
  console.log('erreur.');
} else {
  console.log(string.length);
}
