function logOddNums(start, end) {
  if (start % 2 == 0) start += 1;
  for (let n = start; n <= end; n += 2) console.log(n);
}

logOddNums(4, 50);
