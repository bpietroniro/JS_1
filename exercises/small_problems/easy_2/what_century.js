function century(year) {
  let centuryNumber;

  if (year % 100 === 0) {
    centuryNumber = Math.floor(year / 100);
  } else {
    centuryNumber = Math.floor(year / 100) + 1;
  }

  let century = String(centuryNumber);
  const lastDigit = centuryNumber % 10;
  const lastTwoDigits = centuryNumber % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    century += 'th'
  } else if (lastDigit === 1) {
    century += 'st';
  } else if (lastDigit === 2) {
    century += 'nd';
  } else if (lastDigit === 3) {
    century += 'rd';
  } else {
    century += 'th';
  }

  return century;
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
