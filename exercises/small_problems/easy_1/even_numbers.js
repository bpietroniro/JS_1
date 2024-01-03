function logEvenNums(start, end) {
  if (start % 2 == 1) start += 1;
  for (let n = start; n <= end; n += 2) console.log(n);
}

logEvenNums(4, 50);
logEvenNums(5, 27);
