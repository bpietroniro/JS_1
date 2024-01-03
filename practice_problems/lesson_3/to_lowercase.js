/*
 * - initialize an empty output string
 * - iterate through the characters of the input string
 *   - if the current character is between 'A' and 'Z':
 *     - get its ASCII number
 *     - add 32 to it
 *     - convert back to a character and concatenate to the output
 *   - otherwise, concatenate the current character to the output
 * - return the output string
 */

function toLowerCase(string) {
  const OFFSET = 32;
  let output = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] >= 'A' && string[index] <= 'Z') {
      output += String.fromCharCode(string.charCodeAt(index) + OFFSET);
    } else {
      output += string[index];
    }
  }

  return output;
}

console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));
