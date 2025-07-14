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
console.log(users);

console.log(users.filter((users) => users.isActive));

console.log(users.filter((users) => users.age >= 18));

console.log(users.filter((users) => users.email.endsWith("gmail.com")));

console.log(users.map((users) => users.fullName));

console.log(users.map((users) => users.fullName + " (" + users.age + ")"));

console.log(
  users.map((users) => {
    users;
    if (users.age > 18) users.isAdult = true;
    else users.isAdult = false;
    return users;
  })
);

console.log(users.sort((a, b) => a.age - b.age));

console.log(users.sort((a, b) => b.age - a.age));

