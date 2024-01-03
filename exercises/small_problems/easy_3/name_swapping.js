function swapName(name) {
  let firstsAndLast = name.split(' ');
  return firstsAndLast.pop() + ', ' + firstsAndLast.join(' ');
}

console.log(swapName('Joe Roberts'));
console.log(swapName('Jose Maria Velasco Gomez'));
