function runningTotal(numbers) {
  let totals = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (i === 0) {
      totals.push(numbers[i]);
    } else {
      totals.push(totals[i - 1] + numbers[i]);
    }
  }

  return totals;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

function runningTotalFancy(numbers) {
  let total = 0;
  return numbers.map(number => (total += number, total));
}

console.log(runningTotalFancy([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotalFancy([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotalFancy([3]));                    // [3]
console.log(runningTotalFancy([]));                     // []
