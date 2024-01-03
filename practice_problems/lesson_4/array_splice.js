function splice(arr, start, numVals) {
  let spliced = [];

  for (let i = start; i < start + numVals; i += 1) {
    if (i >= arr.length) break;
    spliced.push(arr[i]);
  }

  for (let i = start; i < arr.length - numVals; i += 1) {
    arr[i] = arr[numVals] + i;
  }

  arr.length -= spliced.length;
  return spliced;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));
console.log(count);
console.log(splice([], 2, 5));
console.log(splice([1, 2, 3], 2, 5));
