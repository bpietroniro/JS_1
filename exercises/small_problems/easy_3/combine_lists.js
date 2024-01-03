function interleave(...lists) {
  const listLength = lists[0].length;
  let combined = [];

  for (let index = 0; index < listLength; index += 1) {
    lists.forEach(list => combined.push(list[index]));
  }

  return combined;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
console.log(interleave([1, 2, 3], ['a', 'b', 'c'], ['x', 'y', 'z']));
