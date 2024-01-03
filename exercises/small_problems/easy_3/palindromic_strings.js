function isPalindrome(string) {
  let leftIndex = 0;
  let rightIndex = string.length - 1;

  while (leftIndex <= rightIndex) {
    if (string[leftIndex] !== string[rightIndex]) return false;
    leftIndex += 1;
    rightIndex -= 1;
  }

  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

function isRealPalindrome(string) {
  let editedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return isPalindrome(editedString);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

function isPalindromicNumber(number) { return isPalindrome(String(number)) }

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
