const fullPath = process.argv[1];
const filename = fullPath.split(/[\\\/]/).pop();
console.log(filename);
