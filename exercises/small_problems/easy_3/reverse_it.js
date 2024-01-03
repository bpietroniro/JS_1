function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));

function reverseWords(sentence) {
  let words = sentence.split(' ');
  let reversed = [];

  words.forEach(word => {
    if (word.length >= 5) {
      reversed.push(reverseWord(word));
    } else {
      reversed.push(word);
    }
  });

  return reversed.join(' ');
}

function reverseWord(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += string[i];
  }

  return result;
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
