let aayush = { name: "Aayush", age: "29", city: "Mumbai" };
console.log(aayush);
aayush.age = "30";
console.log(aayush);
aayush.email = "aayush.t200@gmail.com";
console.log(aayush);

function objectReturn(name) {
  return aayush[name];
}
console.log(objectReturn("name"));

function greetaayush(name) {
  console.log(`Hello, ${aayush[name]}, How are you!`);
}

greetaayush("name");

for (const key in aayush) {
  console.log(aayush[key]);
}
aayush.address = { street: "Baldwin Ave", zipcode: "07306" };
console.log(aayush.address);

users = [
  { id: "1", name: "aayush", isActive: true },
  { id: "2", name: "trivedi", isActive: false },
  { id: "3", name: "jay", isActive: true },
];
console.log(users);

let { name, city } = aayush;
console.log(name, city);

console.log(Object.keys(aayush));
console.log(Object.values(aayush));
console.log(Object.entries(aayush));

const obj1 = {
  name: "Aayush",
  age: 30,
  city: "Mumbai",
};

const obj2 = {
  name: "Aayush",
  age: 30,
  city: "Mumbai",
};
const obj3 = {
  name: "Aayush",
  age: 31,
  city: "Mumbai",
};
console.log(isEqual(obj1, obj2));

function isEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj2Keys.length != obj1Keys.length) return false;
  for (const key of obj1Keys) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(isEqual(obj1, obj3));
