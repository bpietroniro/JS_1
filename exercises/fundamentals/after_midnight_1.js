const MPM = 60000;

function timeOfDay(minutes) {
  const midnight = new Date('1/11/2022 00:00');
  const afterMidnight = new Date(midnight.getTime() + minutes * MPM);

  return `${leadingZero(afterMidnight.getHours())}:${leadingZero(afterMidnight.getMinutes())}`;
}

function leadingZero(number) {
  let numberString = String(number);
  return numberString.length < 2 ? '0' + numberString : numberString;
}


console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
