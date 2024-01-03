function reverseNumber(int) {
  let reversed = 0;

  while (int > 0) {
    reversed *= 10;
    reversed += int % 10;
    int = Math.floor(int / 10);
  }

  return reversed;
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));
