function missing(arr) {
  let missingElements = [];
  const len = arr.length;

  for (let i = 1; i < len; i += 1) {
    let previous = arr[i - 1];
    let current = arr[i];

    if (previous !== current) {
      for (let j = previous + 1; j < current; j += 1) {
        missingElements.push(j);
      }
    }
  }

  return missingElements;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([1, 5]));
console.log(missing([6]));
