function gcd(m, n) {
  let smaller = Math.min(m, n);
  let larger = Math.max(m, n);

  while (smaller > 0) {
    let remainder = larger % smaller;
    larger = smaller;
    smaller = remainder;
  }

  return larger;
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));
