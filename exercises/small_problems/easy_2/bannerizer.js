function logInBox(message) {
  const length = message.length + 2;
  const topBottomBorder = '+' + '-'.repeat(length) + '+';
  const padding = '|' + ' '.repeat(length) + '|';
  const messageLine = '| ' + message + ' |';

  console.log(topBottomBorder);
  console.log(padding);
  console.log(messageLine);
  console.log(padding);
  console.log(topBottomBorder);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
