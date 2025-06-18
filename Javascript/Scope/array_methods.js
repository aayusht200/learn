let users = [
  { name: "John", surname: "Smith", id: 1, age: 20 },
  { name: "Pete", surname: "Hunt", id: 2, age: 18 },
  { name: "Mary", surname: "Key", id: 3, age: 19 },
];

console.log(users.map((users) => users.name));

let users_fullname = users.map((users) => ({
  fullname: `${users.name} ${users.surname}`,
  id: users.id,
  age: users.age,
}));

console.log(users_fullname);

console.log(users_fullname.sort((a, b) => a.age - b.age));

let age_sum = 0;

console.log(
  users.reduce((total, current) => (total = current.age + total), 0) /
    users.length
);

let users_key = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
