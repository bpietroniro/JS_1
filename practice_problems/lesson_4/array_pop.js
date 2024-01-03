function pop(arr) {
  if (arr.length === 0) return undefined;

  elementToReturn = arr[arr.length - 1];
  arr.length -= 1;
  return elementToReturn;
}

let count = [1, 2, 3];
console.log(pop(count));
console.log(count);
