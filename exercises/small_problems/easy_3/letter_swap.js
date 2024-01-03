function swap(string) {
  let words = string.split(' ');

  let swappedWords = words.map(word => {
    const lastIndex = word.length - 1;
    if (lastIndex === 0) return word;
    return word[lastIndex] + word.slice(1, -1) + word[0];
  });

  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
