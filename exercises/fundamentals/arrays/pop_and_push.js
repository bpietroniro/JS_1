function pop(arr) {
  let len = arr.length;
  if (len === 0) return undefined;

  let popped = arr[len - 1];
  arr.length -= 1;

  return popped;
}

const array1 = [1, 2, 3];
console.log(pop(array1));
console.log(array1);
console.log(pop([]));
console.log(pop([1, 2, ['a', 'b', 'c']]));

function push(arr, ...args) {
  args.forEach(arg => arr[arr.length] = arg);

  return arr.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));
console.log(array2);
console.log(push([1, 2], ['a', 'b']));
console.log(push([], 1));
console.log(push([]));
