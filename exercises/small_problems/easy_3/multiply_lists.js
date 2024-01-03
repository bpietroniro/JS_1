function multiplyList(...numArrays) {
  const arrayLength = numArrays[0].length;
  let result = [];

  for (let index = 0; index < arrayLength; index += 1) {
    result[index] = 1;
    numArrays.forEach(array => {
      result[index] *= array[index];
    });
  }

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11], [3, 6, 4]));
