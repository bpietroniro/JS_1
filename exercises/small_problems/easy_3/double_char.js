function repeater(string) {
  let output = '';
  const strLength = string.length;

  for (let index = 0; index < strLength; index += 1) {
    let currentChar = string[index];
    output += currentChar + currentChar;
  }

  return output;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));

function doubleConsonants(string) {
  let output = '';
  const strLength = string.length;

  for (let index = 0; index < strLength; index += 1) {
    let currentChar = string[index];
    output += currentChar;

    if (/[a-zA-Z]/.test(currentChar) && /[^aeiou]/.test(currentChar)) {
      output += currentChar;
    }
  }

  return output;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
