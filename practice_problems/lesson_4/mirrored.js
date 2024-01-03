function mirrored(arr) {
  let mirror = arr.slice();
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    mirror.push(arr[i]);
  }

  return mirror;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(mirrored(digits));
console.log(digits);

function mirroredConcise(arr) {
  let reversed = arr.slice().reverse();
  return arr.concat(reversed);
}

digits = [4, 8, 15, 16, 23, 42];
console.log(mirroredConcise(digits));
console.log(digits);
