function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numStr = '';

  if (num === 0) return '0';

  do {
    numStr = DIGITS[num % 10] + numStr;
    num = Math.floor(num / 10);
  } while (num > 0);

  return numStr;
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));

function signedIntegerToString(num) {
  if (num < 0) {
    return '-' + integerToString(-num);
  } else if (num > 0) {
    return '+' + integerToString(num);
  } else {
    return integerToString(num);
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
