const average = function(numbers) {
  return Math.floor(numbers.reduce((sum, num) => sum + num, 0) / numbers.length);
};

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));

