function incrementProperty(obj, key) {
  if (obj[key]) {
    obj[key] += 1;
  } else {
    obj[key] = 1;
  }

  return obj[key];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));
console.log(incrementProperty(wins, 'lucy'));
