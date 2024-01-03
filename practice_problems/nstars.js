function generatePattern(n) {
  let LINE_LENGTH;
  if (n <= 9) {
    LINE_LENGTH = n;
  } else {
    LINE_LENGTH = 2 * (n - 9) + 9;
  }

  for (let lineNum = 1; lineNum <= n; lineNum += 1) {
    let line = '';

    for (let position = 1; position <= lineNum; position += 1) {
      line += position;
    }

    for (let position = lineNum + 1; position <= n; position += 1) {
      if (LINE_LENGTH > 9 && position >= 10) {
        line += '**';
      } else {
        line += '*';
      }
    }

    console.log(line);
  }
}

generatePattern(7);
generatePattern(15);
