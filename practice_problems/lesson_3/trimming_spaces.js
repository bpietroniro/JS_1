/*
- find the index of the first non-space character
- find the index of the last non-space character
- make a copy of the string from the first index thru the second index and return
*/

function trim(str) {
  let result = '';
  let firstIndex = 0;
  let lastIndex = str.length - 1;

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      firstIndex = index;
      break;
    }
  }

  for (let index = str.length - 1; index >= 0; index -= 1) {
    if (str[index] !== ' ') {
      lastIndex = index;
      break;
    }
  }

  for (let index = firstIndex; index <= lastIndex; index += 1) {
    result += str[index];
  }

  return result;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
