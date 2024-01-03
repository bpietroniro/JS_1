function showMultiplicativeAverage(numbers) {
  let average = numbers.reduce((sum, num) => sum * num, 1) / numbers.length;
  return String(average.toFixed(3));
}

console.log(showMultiplicativeAverage([3, 5]));
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));
