const stringHeure12 = process.argv[2];
let heure = (stringHeure12[0] + stringHeure12[1]) / 1;
const minutes = stringHeure12[3] + stringHeure12[4];
let amOrPm = stringHeure12[5] + stringHeure12[6] == 'PM' ? 'PM' : 'AM';

if (heure == 0) {
  heure = 12;
  amOrPm = 'AM';
}
if (amOrPm == 'PM') {
  heure += 12;
}

console.log(`${heure}:${minutes}`);
