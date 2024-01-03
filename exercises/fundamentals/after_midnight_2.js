const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;
function afterMidnight(timeString) {
  let time = new Date('1/11/2023 ' + timeString);
  let midnight = new Date('1/11/2023 00:00');

  let hours = time.getHours() - midnight.getHours();
  let minutes = time.getMinutes() - midnight.getMinutes();

  return hours * MINUTES_IN_HOUR + minutes;
}

function beforeMidnight(timeString) {
  let time = new Date('1/11/2023 ' + timeString);
  let midnight = new Date('1/12/2023 00:00');
  
  let hours = midnight.getHours() - time.getHours();
  let minutes = midnight.getMinutes() - time.getMinutes();

  let differenceMinutes = hours * MINUTES_IN_HOUR + minutes;
  if (differenceMinutes < 0) differenceMinutes += MINUTES_IN_DAY;

  return differenceMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
