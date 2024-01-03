function union(...arrays) {
  let found = {};

  arrays.forEach(array => {
    array.forEach(element => {
      if (!found[element]) found[element] = true;
    });
  });

  return Object.keys(found).map(key => Number(key));
}

console.log(union([1, 3, 5], [3, 6, 9]));
