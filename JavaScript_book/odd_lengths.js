function oddLengths(arr) {
  return arr.map(str => str.length).filter(length => length % 2 === 1)
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
