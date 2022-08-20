i = 0;

while (arguments[i]) {
  if (i >= 2) {
    console.log(process.argv[i]);
  }
  i++;
}
