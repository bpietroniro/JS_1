function matrixSums(arr) {
  return arr.map(subArr => subArr.reduce((sum, num) => sum + num, 0))
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));
