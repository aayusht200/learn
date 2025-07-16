// Array of user objects
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

// Debug / Inspect (not a question)
console.log(users);

// 1. Use .filter() to get all active users
console.log(users.filter((users) => users.isActive));

// 2. Use .filter() to get users who are 18 or older
console.log(users.filter((users) => users.age >= 18));

// 3. Use .filter() to get users with Gmail accounts
console.log(users.filter((users) => users.email.endsWith("gmail.com")));

// 4. Use .map() to return just the user names
console.log(users.map((users) => users.fullName));

// 5. Use .map() to return user name and age as a string like "John Doe (19)"
console.log(users.map((users) => users.fullName + " (" + users.age + ")"));

// 6. Use .map() to add an isAdult boolean to each user
console.log(
  users.map((users) => {
    users.isAdult = users.age >= 18;
    return users;
  })
);

// 7. Use .sort() to sort users by age in ascending order
console.log(users.sort((a, b) => a.age - b.age));

// 8. Use .sort() to sort users by age in descending order
console.log(users.sort((a, b) => b.age - a.age));

// 9. Use .sort() to sort users alphabetically by full name
console.log(
  users.sort((a, b) => {
    return a.fullName[0].localeCompare(b.fullName[0]);
  })
);

// 10. Use .reduce() to sum the total age of all users
console.log(
  users.reduce((temp, users) => {
    temp = temp + users.age;
    return temp;
  }, 0)
);

// 11. Use .reduce() to calculate the average age
console.log(
  users.reduce((temp, user) => {
    temp = temp + user.age;
    return temp;
  }, 0) / users.length
);

// 12. Use .reduce() to get a comma-separated list of all names
console.log(
  users
    .reduce((temp, user) => {
      temp = temp + "," + user.fullName;
      return temp;
    }, "")
    .slice(1)
);

// 13. Use .filter() and .map() together to get names of active users
console.log(users.filter((user) => user.isActive).map((user) => user.fullName));

// 14. Use .map() and .sort() to list all emails alphabetically
console.log(users.map((user) => user.email).sort((a, b) => a.localeCompare(b)));

// 15. Use .map() to return initials (e.g., "JD" for John Doe)
console.log(
  users.map((user) => {
    let temp = user.fullName.split(" ");
    return temp[0][0] + (temp[1] ? temp[1][0] : "");
  })
);

// 16. Use .sort() to sort users by their last name
console.log(
  users.sort((a, b) => {
    const temp = a.fullName.split(" ");
    const test = b.fullName.split(" ");
    return (temp[1] || "").localeCompare(test[1] || "");
  })
);

// 17. Use .filter() to return users whose last name starts with a vowel
console.log(
  users.filter((user) => {
    const [, lastName] = user.fullName.split(" ");
    return "aeiou".includes((lastName?.[0] || "").toLowerCase());
  })
);

// 18. Use .reduce() to count how many users are active and how many are not
const activeUsers = users.reduce((count, user) => {
  if (user.isActive) count += 1;
  return count;
}, 0);
console.log(
  `${activeUsers} are the active users, ${
    users.length - activeUsers
  } are not active`
);

// 19. Use .filter() to find users younger than 25 and return their emails
console.log(users.filter((user) => user.age < 25).map((user) => user.email));

// 20. Use .map() and .filter() to return full names of users with Yahoo emails
console.log(
  users
    .filter((user) => user.email.includes("yahoo"))
    .map((user) => user.fullName)
);
