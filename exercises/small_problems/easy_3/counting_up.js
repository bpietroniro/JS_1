function sequence(n) {
  let integersUpTo = [];
  for (let i = 1; i <= n; i += 1) {
    integersUpTo.push(i);
  }

  return integersUpTo;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
