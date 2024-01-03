function slice(array, begin, end) {
  begin = begin < array.length ? begin : array.length;
  end = end < array.length ? end : array.length;

  let newArr = [];
  for (let i = begin; i < end; i += 1) {
    newArr.push(array[i]);
  }

  return newArr;
}

console.log(slice([1, 2, 3], 1, 2));
console.log(slice([1, 2, 3], 2, 0));
console.log(slice([1, 2, 3], 5, 1));
console.log(slice([1, 2, 3], 0, 5));

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));
console.log(arr1);

/*
 *  declare indexing variable
 *  loop indices from start up to start + deleteCount
 *    push the element at the current index to 'deleted'
 *    if args has a value, assign the current index args.shift()
 *    otherwise, assign it the element at i + deleteCount
 *  if there are still elements left in args:
 *    set new variable to hold the value of the indexing variable from before
 *    loop down from end of array to that index
 *      set array[currentindex + args.length] equal to the element at current index
 *    while args isn't empty:
 *      set array index at otherindex to args.shift()
 */

function splice(array, start, deleteCount, ...args) {
  let len = array.length;
  start = start > len? len : start;
  deleteCount = deleteCount > len - start ? len - start : deleteCount;
  let deleted = [];

  let i = start;
  for (; i < start + deleteCount; i += 1) {
    deleted.push(array[i]);
    if (args[0]) {
      array[i] = args.shift();
    } else {
      array[i] = array[i + deleteCount]
    }
  }

  if (args[0]) {
    let insertPosition = i;
    for (let j = array.length - 1; j >= insertPosition; j -= 1) {
      array[j + args.length] = array[j];
    }

    while (args[0]) {
      array[insertPosition] = args.shift();
      insertPosition += 1;
    }
  }

  return deleted;
}

console.log(splice([1, 2, 3], 1, 2));
console.log(splice([1, 2, 3], 1, 3));
console.log(splice([1, 2, 3], 1, 0));
console.log(splice([1, 2, 3], 0, 1));
console.log(splice([1, 2, 3], 1, 0, 'a'));

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));
console.log(arr2);

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));
console.log(arr3);

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));
console.log(splice(arr4, 1, 0, 'a'));
console.log(arr4);

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));
console.log(arr5);

const arr6 = [1, 2, 3];
console.log(splice(arr6, 1, 1, 'a', 'b'));
console.log(arr6);
