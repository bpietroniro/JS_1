function concat(arr1, arr2) {
  newArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    newArr.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i += 1) {
    newArr.push(arr2[i]);
  }

  return newArr;
}
