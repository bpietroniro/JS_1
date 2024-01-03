const rlSync = require('readline-sync');

const phrase = rlSync.question('Please enter a phrase: ');
console.log(`There are ${phrase.length} characters in "${phrase}".`);

// further exploration
let noWhitespace = phrase.replace(/\s/g, '');
console.log(`There are ${noWhitespace.length} non-whitespace characters in "${phrase}".`);

let alphaOnly = phrase.replace(/[^a-zA-Z]/g, '');
console.log(`There are ${alphaOnly.length} alphabetic characters in "${phrase}".`);
