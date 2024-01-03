function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

for (let n = 1; n <= 8; n += 1) {
  console.log(factorial(n));
}
