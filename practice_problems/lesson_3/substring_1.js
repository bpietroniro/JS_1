/*
 * - initialize empty output string
 * - if start is negative, reassign it to string length + start
 * - iterate from start to start + length
 *   - break if the current index is greater than the length of the string
 *   - concatenate the current character to the output string
 * - return the output string
 */

function substr(string, start, length) {
  if (start < 0) start = string.length + start;
  let substring = '';
  
  for (let index = start; index < start + length; index += 1) {
    if (string[index] === undefined) break;
    substring += string[index];
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
