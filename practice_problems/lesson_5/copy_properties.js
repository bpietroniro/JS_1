function copyProperties(obj1, obj2) {
  let propertiesCopied = 0;

  for (let property in obj1) {
    obj2[property] = obj1[property];
    propertiesCopied += 1;
  }

  return propertiesCopied;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};

console.log(copyProperties(hal, sal));
console.log(sal);
