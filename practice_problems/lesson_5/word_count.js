function wordCount(string) {
  let words = string.split(' ');
  let counts = {};

  words.forEach(word => {
    if (counts[word]) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  });

  return counts;
}

console.log(wordCount('box car cat bag box'));
