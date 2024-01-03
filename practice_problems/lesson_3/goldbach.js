function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let currentNumber = 2; currentNumber <= Math.sqrt(number); currentNumber += 1) {
    if (number % currentNumber === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(num) {
  if (num < 4 || num % 2 === 1) {
    console.log(null);
    return;
  }

  for (let n = 2; n < num / 2; n += 1) {
    if (isPrime(n) && isPrime(num - n)) {
      console.log(n, num - n);
    }
  }
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
