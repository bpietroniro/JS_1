function oddLengths(arr) {
  return arr.reduce((newArr, str) => {
    let length = str.length;
    if (length % 2 === 1) { newArr.push(length) }
    return newArr;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
