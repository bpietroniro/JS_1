let rlSync = require('readline-sync');

n = rlSync.question('Please enter an integer greater than 0: ');
choice = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (choice === 's') {
  console.log(`The sum of the integers between 1 and ${n} is ${computeSum(n)}.`);
} else if (choice === 'p') {
  console.log(`The product of the integers between 1 and ${n} is ${computeProduct(n)}.`);
}

function computeSum(n) {
  let sum = 0;
  for (let num = 1; num <= n; num += 1) {
    sum += num;
  }

  return sum;
}

function computeProduct(n) {
  let product = 1;
  for (let num = 1; num <= n; num += 1) {
    product *= num;
  }

  return product;
}
