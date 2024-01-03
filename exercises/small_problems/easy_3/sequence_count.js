function sequence(count, start) {
  let result = [];
  let currentNum = start;

  for (let iteration = 0; iteration < count; iteration += 1) {
    result.push(currentNum);
    currentNum += start;
  }

  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
