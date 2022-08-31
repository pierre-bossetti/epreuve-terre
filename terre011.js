const stringHeure24 = process.argv[2];
let heure = (stringHeure24[0] + stringHeure24[1]) % 12;
const minutes = stringHeure24[3] + stringHeure24[4];
let amOrPm =
  (stringHeure24[0] > 0 && stringHeure24[1] > 1) ||
  (stringHeure24[0] == 0 && stringHeure24[1] == 0)
    ? 'PM'
    : 'AM';

if (heure == 0) {
  heure = 12;
  amOrPm = 'AM';
}

console.log(`${heure}:${minutes}${amOrPm}`);
