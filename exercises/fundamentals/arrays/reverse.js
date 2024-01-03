function reverse(input) {
  let output;

  if (Array.isArray(input)) {
    output = [];
    for (let i = input.length - 1; i >= 0; i -= 1) {
      output.push(input[i]);
    }
  } else {
    output = '';
    for (let i = input.length - 1; i >= 0; i -= 1) {
      output += input[i];
    }
  }

  return output;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
