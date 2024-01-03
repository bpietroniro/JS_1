const METERS_TO_SQ_FEET = 10.7639;
let rlSync = require('readline-sync');

console.log('Enter the length of the room in meters:');
let length = rlSync.prompt();

console.log('Enter the width of the room in meters:')
let width = rlSync.prompt();

areaMeters = length * width;
areaFeet = areaMeters * METERS_TO_SQ_FEET;
console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet} square feet).`);
