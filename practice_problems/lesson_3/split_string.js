function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  if (delimiter === '') {
    for (index = 0; index < string.length; index += 1) {
      console.log(string[index]);
    }

    return;
  }

  let substring = '';

  for (index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      console.log(substring);
      substring = '';
    } else {
      substring += string[index];
    }
  }

  if (substring) console.log(substring);
}

splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
splitString('hello', ';');
splitString(';hello;', ';');
