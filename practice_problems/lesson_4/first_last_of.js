function firstNOf(arr, count) {
  return arr.slice(0, count);
}

function lastNOf(arr, count) {
  let index = arr.length - count;
  if (index < 0) return arr.slice();
  return arr.slice(index);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));
console.log(lastNOf(digits, 3));
