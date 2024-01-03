const MINUTES_IN_DEGREE = 60;
const SECONDS_IN_MINUTE = 60;

function dms(degrees) {
  let totalSeconds = Math.round(degrees * MINUTES_IN_DEGREE * SECONDS_IN_MINUTE);
  let seconds = totalSeconds % SECONDS_IN_MINUTE;
  let totalMinutes = Math.floor(totalSeconds / SECONDS_IN_MINUTE);
  let minutes = totalMinutes % MINUTES_IN_DEGREE;
  degrees = Math.floor(totalMinutes / MINUTES_IN_DEGREE);

  return `${degrees}˚${pad(minutes)}'${pad(seconds)}"`;
}

function pad(quantity) {
  if (quantity < 10) {
    return `0${quantity}`;
  } else {
    return quantity;
  }
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));
