let currentAge = parseInt(prompt('What is your age? '), 10);
let retirementAge = parseInt(prompt('At what age would you like to retire? '), 10);

let workYearsLeft = retirementAge - currentAge;
let currentYear = new Date().getFullYear();
let retirementYear = currentYear + workYearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsLeft} years of work to go!`);
