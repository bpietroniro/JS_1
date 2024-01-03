function crunch(string) {
  let crunched = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i + 1] !== string[i]) {
      crunched += string[i];
    }
  }

  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));
