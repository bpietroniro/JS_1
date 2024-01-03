function digitList(num) {
  return String(num).split('').map(numStr => parseInt(numStr, 10));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));
