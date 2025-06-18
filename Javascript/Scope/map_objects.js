const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];
let users_names = users.map((users) => users.name);
console.log(users_names);

let adult_users = users.map((users) => {
  return { ...users, isAdult: users.age >= 18 };
});
console.log(adult_users);

const members = [
  { name: "Aayush", email: "aayush@example.com" },
  { name: "Maya", email: "maya@example.com" },
];

console.log(members.map((users) => users.email));

const people = [
  { name: "Aayush", city: "Mumbai" },
  { name: "Jay", city: "Delhi" },
];

console.log(people.map((users) => `${users.name} from ${users.city}`));

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Tablet" },
];

console.log(products.map((products) => products.id));

const items = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 100 },
];

console.log(items.map((items) => `${items.name}: RS:${items.price}`));
let serial_items = items.map((items, index) => {
  return { serial: index + 1, ...items };
});
console.log(serial_items);

console.log(members.map((name) => name.name.toUpperCase()));

const contacts = [{ name: "Alice Walker" }, { name: "Bob Smith" }];

console.log(
  contacts.map((initial) => {
    let [first, last] = initial.name.split(" ");
    return first[0] + (last ? last[0] : "");
  })
);

let birthYear = users.map((birthYear) => 2025 - birthYear.age);
console.log(birthYear);
