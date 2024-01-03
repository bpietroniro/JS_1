function countOccurrences(elements) {
  let tally = {};

  elements.forEach(element => {
    tally[element] = tally[element] || 0;
    tally[element] += 1;
  });

  Object.keys(tally).forEach(key => {
    console.log(`${key} => ${tally[key]}`);
  });
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

