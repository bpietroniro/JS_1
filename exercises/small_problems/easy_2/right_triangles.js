function triangle(n) {
  for (let numStars = 1; numStars <= n; numStars += 1) {
    console.log(' '.repeat(n - numStars) + '*'.repeat(numStars));
  }
}

triangle(5);
triangle(9);
