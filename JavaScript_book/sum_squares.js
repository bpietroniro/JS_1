function sumOfSquares(arr) {
  return arr.reduce((sum, num) => sum + num ** 2, 0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array));
