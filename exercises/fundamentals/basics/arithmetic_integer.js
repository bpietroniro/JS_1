let rlSync = require('readline-sync'); 

function prompt(message) {
  return rlSync.question("==> " + message);
}

function log(message) {
  console.log("==> " + message);
}

first = Number(prompt("Enter the first number:\n"));
second = Number(prompt("Enter the second number:\n"));

log(`${first} + ${second} = ${first + second}`);
log(`${first} - ${second} = ${first - second}`);
log(`${first} * ${second} = ${first * second}`);
log(`${first} / ${second} = ${Math.floor(first / second)}`);
log(`${first} % ${second} = ${first % second}`);
log(`${first} ** ${second} = ${first ** second}`);
