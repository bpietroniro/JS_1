/*
 * - if times is 0, return the empty string
 * - else if times is 0 or NaN when coerced to a number, return undefined
 * - otherwise create a new output string and concatenate string to it "times" times
 */
function repeat(string, times) {
  if (times === 0) {
    return '';
  } else if (Number(times) <= 0 || isNaN(Number(times))) {
    return undefined;
  } else {
    let output = '';
    
    for (let iteration = 0; iteration < times; iteration += 1) {
      output += string;
    }

    return output;
  }
}

console.log(repeat('abc', 1));
console.log(repeat('abc', 2));
console.log(repeat('abc', -1));
console.log(repeat('abc', 0));
console.log(repeat('abc', 'a'));
console.log(repeat('abc', false));
console.log(repeat('abc', null));
console.log(repeat('abc', '  '));
