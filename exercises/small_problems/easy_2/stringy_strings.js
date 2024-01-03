function stringy(num) {
  let output = '';

  for (let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      output += '1';
    } else {
      output += '0';
    }
  }

  return output;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
