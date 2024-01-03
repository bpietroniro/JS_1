function uniqueElements(arr) {
  let unique = [];
  const len = arr.length;

  for (let i = 0; i < len; i += 1) {
    if (!(unique.includes(arr[i]))) unique.push(arr[i]);
  }

  return unique;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));
