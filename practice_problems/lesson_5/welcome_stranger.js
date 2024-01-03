function greetings(nameArray, infoObject) {
  let name = nameArray.join(' ');
  let status = infoObject.title + ' ' + infoObject.occupation;
  console.log(`Hello, ${name}! Nice to have a ${status} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
