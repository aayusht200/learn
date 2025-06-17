// let user_name = [];
// for (const element of users) {
//   user_name.push(element.name);
// }

// console.log(user_name);

// let user_fullName = [];
// for (const element of users) {
//   let full_name = element.name + " " + element.surname;
//   let id = element.id;
//   user_fullName.push({ full_name, id });
// }
// console.log(user_fullName);
let users = [
  { name: "John", surname: "Smith", id: 1 },
  { name: "Pete", surname: "Hunt", id: 2 },
  { name: "Mary", surname: "Key", id: 3 },
];
let name = users.map((users) => users.name);
console.log(name);
let user_full_name = users.map((users) => ({
  full_name: `${users.name} ${users.surname}`,
  id: users.id,
}));
console.log(user_full_name);
