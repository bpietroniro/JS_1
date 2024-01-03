function multiply(num1, num2) {
  return num1 * num2;
}

rlSync = require('readline-sync');
firstNumber = rlSync.question("Enter the first number: ");
secondNumber = rlSync.question("Enter the second number: ");

console.log(`${firstNumber} x ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);
