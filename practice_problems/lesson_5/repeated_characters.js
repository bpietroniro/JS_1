function repeatedCharacters(string) {
  let charTally = {};

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i].toLowerCase();

    if (!charTally[char]) {
      charTally[char] = 1;
    } else {
      charTally[char] += 1;
    }
  }

  for (let letter in charTally) {
    if (charTally[letter] === 1) delete charTally[letter];
  }

  return charTally;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
