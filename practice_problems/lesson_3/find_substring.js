const indexOf = (firstString, secondString) => {
  for (let index = 0; index <= firstString.length - secondString.length; index += 1) {
    if (firstString[index] === secondString[0]) {
      let match = true;

      for (subIndex = index; subIndex < index + secondString.length; subIndex += 1) {
        if (firstString[subIndex] !== secondString[subIndex - index]) {
          match = false;
          break;
        }
      }

      if (match) return index;
    }
  }

  return -1;
}

const lastIndexOf = (firstString, secondString) => {
  const fullLength = firstString.length;
  const subLength =  secondString.length;

  for (let index = fullLength - subLength; index >= 0; index -= 1) {
    if (firstString[index] === secondString[0]) {
      let match = true;

      for (subIndex = index; subIndex < index + secondString.length; subIndex += 1) {
        if (firstString[subIndex] !== secondString[subIndex - index]) {
          match = false;
          break;
        }
      }

      if (match) return index;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));
console.log(indexOf('Blue Whale', 'Whale'));
console.log(indexOf('Blue Whale', 'Blute'));
console.log(indexOf('Blue Whale', 'leB'));

console.log(lastIndexOf('Some strings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));
