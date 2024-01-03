function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let currentNumber = 2; currentNumber < Math.sqrt(number); currentNumber += 1) {
    if (number % currentNumber === 0) {
      return false;
    }
  }

  return true;
}
