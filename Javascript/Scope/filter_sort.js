const users = [
  { fullName: "John Doe", isActive: true, age: 19, email: "john@gmail.com" },
  { fullName: "Jane Smith", isActive: false, age: 29, email: "jane@yahoo.com" },
  {
    fullName: "James Brown",
    isActive: true,
    age: 39,
    email: "james@yahoo.com",
  },
  { fullName: "Joan Clark", isActive: false, age: 17, email: "joan@gmail.com" },
  {
    fullName: "Aayush Trivedi",
    isActive: true,
    age: 18,
    email: "aayush@gmail.com",
  },
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

const items = [
  { name: "pen", stock: 0 },
  { name: "book", stock: 4 },
];
console.log(items.filter((a) => a.stock > 0));

console.log(users.sort((a) => a.name));

console.log(
  users.sort((a, b) => {
    let aletter = a.fullName[a.fullName.indexOf(" ") + 1];
    let bletter = b.fullName[b.fullName.indexOf(" ") + 1];
    return aletter.localeCompare(bletter);
  })
);

const tasks = [
  { name: "Task A", priority: 2 },
  { name: "Task B", priority: 1 },
];

console.log(tasks.sort((a, b) => a.priority - b.priority));
