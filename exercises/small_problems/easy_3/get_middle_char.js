function centerOf(string) {
  let len = string.length;

  if (len % 2 === 0) {
    return string.slice((len / 2) - 1, (len / 2) + 1);
  } else {
    return string[Math.floor(len / 2)];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
