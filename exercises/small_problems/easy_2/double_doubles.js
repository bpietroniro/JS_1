function twice(num) {
  if (isDoubleNumber(num)) {
    return num;
  }

  return num * 2;
}

function isDoubleNumber(n) {
  const power = String(n).length;

  if (power % 2 === 1) {
    return false;
  }
  
  const digitHalf = 10 ** (power / 2);
  return (n % digitHalf === Math.floor(n / digitHalf));
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
