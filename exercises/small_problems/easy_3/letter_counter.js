function wordSizes(string) {
  let words = string.replace(/[^[a-zA-Z\s]/g, '').split(' ');
  let counts = {};

  words.forEach(word => {
    if (word.length === 0) return;

    if (counts[word.length]) {
      counts[word.length] += 1;
    } else {
      counts[word.length] = 1;
    }
  });

  return counts;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
