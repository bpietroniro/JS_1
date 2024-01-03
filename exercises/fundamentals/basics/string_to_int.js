/*
 *  let power = numStr.length - 1
 *  iterate through numStr
 *    for each digit, find its value in DIGITS
 *    multiply this by 10 to the power * digit
 *    decrement power
 */
function stringToInteger(numStr) {
  const DIGITS = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0 };
  let number = 0;
  let power = numStr.length - 1;

  for (let index = 0; index < numStr.length; index += 1) {
    number += (10 ** power) * DIGITS[numStr[index]];
    power -= 1;
  }
  return number;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));

function stringToSignedInteger(numStr) {
  let firstChar = numStr[0];
  if (firstChar === '+') {
    return stringToInteger(numStr.slice(1));
  } else if (firstChar === '-') {
    return -1 * stringToInteger(numStr.slice(1));
  } else {
    return stringToInteger(numStr);
  }
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));
