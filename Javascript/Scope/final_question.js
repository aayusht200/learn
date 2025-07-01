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

console.log(
  users.filter((user) => {
    return user.isActive;
  })
);

console.log(
  users.filter((user) => {
    return user.age >= 18;
  })
);

console.log(users.filter((user) => user.email.includes("gmail.com")));

console.log(users.map((user) => user.fullName));

console.log(users.map((users) => `${users.fullName} (${users.age})`));

let newUsers = users.map((user) => ({
  ...user,
  isAdult: user.age >= 18,
}));

console.log(newUsers);

console.log(users.sort((a, b) => a.age - b.age));
console.log(users.sort((a, b) => b.age - a.age));

console.log(
  users.sort((a, b) => {
    if (a.fullName[0] > b.fullName[0]) return 1;
    if (a.fullName[0] < b.fullName[0]) return -1;
    return 0;
  })
);

console.log(
  users.sort((a, b) => {
    let tempA = a.fullName.split(" ").slice(-1)[0];
    let tempB = a.fullName.split(" ").slice(-1)[0];
    return tempA.localeCompare(tempB);
  })
);

console.log(users.reduce((temp, users) => temp + users.age, 0));
console.log(users.reduce((temp, users) => temp + users.age, 0) / users.length);

console.log(
  users.reduce((temp, users) => users.fullName + "," + temp, "").slice(0, -1)
);

console.log(users.filter((a) => a.isActive).map((users) => users.fullName));

console.log(
  users.map((users) => users.email).sort((a, b) => a.localeCompare(b))
);

console.log(
  users.map(
    (users) => users.fullName.split(" ")[0][0] + users.fullName.split(" ")[1][0]
  )
);

console.log(
  users.sort((a, b) =>
    a.fullName.split(" ")[1][0].localeCompare(b.fullName.split(" ")[1][0])
  )
);

console.log(
  users.sort((a, b) => {
    const [, tempA] = a.fullName.split(" ");
    const [, tempB] = b.fullName.split(" ");
    return tempA.localeCompare(tempB);
  })
);

console.log(
  users.filter((a) => "aeiou".includes(a.fullName[0].toLocaleLowerCase()))
);

console.log(
  users.filter((a) => {
    const [, lastName] = a.fullName.split(" ");
    return ["a", "e", "i", "o", "u"].includes.lastName[0];
  })
);
