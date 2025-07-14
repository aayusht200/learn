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

// 1. Log the full users array
console.log(users);

// 2. Filter users who are active
console.log(users.filter((users) => users.isActive));

// 3. Filter users who are age 18 or older
console.log(users.filter((users) => users.age >= 18));

// 4. Filter users with email ending in "gmail.com"
console.log(users.filter((users) => users.email.endsWith("gmail.com")));

// 5. Map all users to just their full names
console.log(users.map((users) => users.fullName));

// 6. Map users to their name and age as a formatted string
console.log(users.map((users) => users.fullName + " (" + users.age + ")"));

// 7. Add an isAdult property based on age
console.log(
  users.map((users) => {
    // This mutates the original objects
    if (users.age > 18) users.isAdult = true;
    else users.isAdult = false;
    return users;
  })
);
// NOTE: Be cautious—this modifies the original `users` array since objects are passed by reference

// 8. Sort users by ascending age
console.log(users.sort((a, b) => a.age - b.age));

// 9. Sort users by descending age
console.log(users.sort((a, b) => b.age - a.age));

// 10. Sort users alphabetically by the first character of full name
console.log(
  users.sort((a, b) => {
    return a.fullName[0].localeCompare(b.fullName[0]);
  })
);
// NOTE: This only compares the first letter. To sort fully by name, use localeCompare on the whole string

// 11. Reduce to sum of all users' ages
console.log(
  users.reduce((temp, users) => {
    temp = temp + users.age;
    return temp;
  }, 0)
);

// 12. Calculate average age of all users
console.log(
  users.reduce((temp, user) => {
    temp = temp + user.age;
    return temp;
  }, 0) / users.length
);

// 13. Create a comma-separated list of full names
console.log(
  users
    .reduce((temp, user) => {
      temp = temp + "," + user.fullName;
      return temp;
    }, "")
    .slice(1)
);
// 🔍 Alternative: Use `.join(", ")` on a `.map()` for simplicity

// 14. Get full names of only active users
console.log(users.filter((user) => user.isActive).map((user) => user.fullName)); // ✅ Correct: First filters for active users, then maps to just their full names

// 15. Get user initials from full name (e.g., "John Doe" → "JD")
console.log(
  users.map((users) => {
    let temp = users.fullName.split(" ");
    return temp[0][0] + (temp[1] ? temp[1][0] : "");
  })
);
