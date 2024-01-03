function shift(arr) {
  let returnValue = arr[0];
  const len = arr.length;

  for (let i = 1; i < len; i += 1) {
    arr[i - 1] = arr[i];
  }

  arr.splice(arr.length - 1);
  return returnValue;
}

function unshift(arr, ...args) {
  numNewElements = args.length;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    arr[i + numNewElements] = arr[i];
  }

  for (let i = 0; i < numNewElements; i += 1) {
    arr[i] = args[i];
  }

  return arr.length;
}

console.log(shift([1, 2, 3]));
console.log(shift([]));
console.log(shift([[1, 2, 3]], 4, 5));

const testArray = [1, 2, 3];
console.log(shift(testArray));
console.log(testArray);
console.log(unshift(testArray, 5));
console.log(testArray);
