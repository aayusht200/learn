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
  {
    fullName: "Aayush Jain",
    isActive: false,
    age: 18,
    email: "aayush.jain@gmail.com",
  },
];

// 1. Filter active users
console.log(users.filter((user) => user.isActive));

// 2. Filter users aged 18 or older
console.log(users.filter((user) => user.age >= 18));

// 3. Filter users with Gmail accounts
console.log(users.filter((user) => user.email.includes("gmail.com")));

// 4. Map full names only
console.log(users.map((user) => user.fullName));

// 5. Map full name and age as formatted string
console.log(users.map((user) => `${user.fullName} (${user.age})`));

// 6. Map to new array adding isAdult property
let newUsers = users.map((user) => ({
  ...user,
  isAdult: user.age >= 18,
}));
console.log(newUsers);

// 7. Sort users by age (ascending)
console.log(users.sort((a, b) => a.age - b.age));

// 8. Sort users by age (descending)
console.log(users.sort((a, b) => b.age - a.age));

// 9. Sort users by first letter of fullName
console.log(
  users.sort((a, b) => {
    if (a.fullName[0] > b.fullName[0]) return 1;
    if (a.fullName[0] < b.fullName[0]) return -1;
    return 0;
  })
);

// 10. Sort users by last name (but mistakenly used 'a' in both lines)
console.log(
  users.sort((a, b) => {
    let tempA = a.fullName.split(" ").slice(-1)[0];
    let tempB = b.fullName.split(" ").slice(-1)[0]; // Fixed here
    return tempA.localeCompare(tempB);
  })
);

// 11. Reduce: sum of ages
console.log(users.reduce((sum, user) => sum + user.age, 0));

// 12. Average age
console.log(users.reduce((sum, user) => sum + user.age, 0) / users.length);

// 13. Reduce to comma-separated full names (reversed order)
console.log(
  users.reduce((temp, user) => user.fullName + "," + temp, "").slice(0, -1)
);

// 14. Full names of active users
console.log(users.filter((user) => user.isActive).map((user) => user.fullName));

// 15. Sorted email list
console.log(users.map((user) => user.email).sort((a, b) => a.localeCompare(b)));

// 16. Initials from full names
console.log(
  users.map(
    (user) => user.fullName.split(" ")[0][0] + user.fullName.split(" ")[1][0]
  )
);

// 17. Sort by first letter of last name
console.log(
  users.sort((a, b) =>
    a.fullName.split(" ")[1][0].localeCompare(b.fullName.split(" ")[1][0])
  )
);

// 18. Sort by full last name
console.log(
  users.sort((a, b) => {
    const [, lastA] = a.fullName.split(" ");
    const [, lastB] = b.fullName.split(" ");
    return lastA.localeCompare(lastB);
  })
);

// 19. Filter users whose names start with vowels
console.log(
  users.filter((user) => "aeiou".includes(user.fullName[0].toLowerCase()))
);

// 20. Filter users whose last name starts with a vowel
console.log(
  users.filter((user) => {
    const [, lastName] = user.fullName.split(" ");
    return "aeiou".includes(lastName[0].toLowerCase());
  })
);
const temp = users.reduce((result, users) => {
  if (users.email.endsWith("gmail.com") || users.email.endsWith("yahoo.com")) {
    result.push(users.email);
  }
  return result;
}, []);

console.log(temp);

console.log(
  users.reduce((old, users) => {
    if (users.age > old.age) old = users;
    return old;
  }, users[0])
);

const emailLookup = users.reduce((temp, user) => {
  temp[user.email] = user;
  return temp;
}, {});

console.log(emailLookup);

console.log(users.sort((a, b) => a.fullName.length - b.fullName.length));

const age = users.map((users) => ({
  name: users.fullName,
  age: users.age,
}));
console.log(age);

const ageObject = users.reduce((temp, user) => {
  if (temp[user.age]) {
    temp[user.age] += 1;
  } else temp[user.age] = 1;
  return temp;
}, {});

console.log(ageObject);
