function rot13(string) {
  const ROTATION = 13;
  let encryptedString = '';

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    let newChar = char;

    if (alphabetFirstHalf(char)) {
      newChar = String.fromCharCode(string.charCodeAt(index) + ROTATION);
    } else if (alphabetSecondHalf(char)) {
      newChar = String.fromCharCode(string.charCodeAt(index) - ROTATION);
    }

    encryptedString += newChar;
  }

  return encryptedString;
}

function alphabetFirstHalf(char) {
  return (char >= 'A' && char <= 'M' || char >= 'a' && char <= 'm');
}

function alphabetSecondHalf(char) {
  return (char >= 'N' && char <= 'Z' || char >= 'n' && char <= 'z');
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

console.log(rot13(''));
console.log(rot13('   '));
console.log(rot13('0123456789'));
console.log(rot13('!@#$%^&*()-=_+,./<>?;:`~[]{}\|'));
