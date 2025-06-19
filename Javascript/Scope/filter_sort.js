const users = [
  { name: "John", isActive: true, age: 19, email: "john@gmail.com" },
  { name: "Jane", isActive: false, age: 29, email: "jane@yahoo.com" },
  { name: "James", isActive: true, age: 39, email: "james@yahoo.com" },
  { name: "Joan", isActive: false, age: 17, email: "joan@gmail.com" },
  { name: "Aayush", isActive: true, age: 18, email: "aayush@gmail.com" },
];

console.log(users.filter((a) => a.isActive));

console.log(users.filter((a) => a.age >= 18));

console.log(users.filter((a) => a.email.includes("@gmail.com")));

console.log(users.sort((a, b) => a.age - b.age));

console.log(users.sort((a, b) => b.age - a.age));

console.log(
  users.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })
);
