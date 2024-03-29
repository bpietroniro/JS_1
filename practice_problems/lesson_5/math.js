const toDegrees = radians => radians * 180 / Math.PI;

let val = -180;
console.log(Math.abs(val));

console.log(Math.sqrt(16777216));

console.log(Math.pow(16, 6));

let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

const randomInt = (min, max) => {
  if (min === max) return min;
  if (min > max) [min, max] = [max, min];

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
