let today = new Date();

let formattedDay = function(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

let formattedMonth = function(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

let formattedDate = function(date) {
  let day = formattedDay(date);
  let month =  formattedMonth(date);

  console.log(`Today's date is ${day}, ${month} ${date.getDate()}.`);
}

formattedDate(today);
console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());
console.log(today.toDateString() === nextWeek.toDateString());
nextWeek.setDate(today.getDate() + 7);
formattedDate(nextWeek);
console.log(today.toDateString() === nextWeek.toDateString());

let formatTime = function(date) {
  let hours = padZero(date.getHours());
  let minutes = padZero(date.getMinutes());

  return `${hours}:${minutes}`;
}

function padZero(timePart) {
  return timePart < 10 ? '0' + String(timePart) : String(timePart);
}

console.log(formatTime(today));
