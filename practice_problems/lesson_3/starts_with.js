/*
 * - if the second string is longer than the first, return false
 * - loop through the characters of the second string
 *   - if the current character isn't the same as the corresponding character in the
 *     first string, return false
 * - return true
 */

function startsWith(string, searchString) {
  if (searchString.length > string.length) return false;

  for (let index = 0; index < searchString.length; index += 1) {
    if (string[index] !== searchString[index]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
