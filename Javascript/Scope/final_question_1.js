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

// 0. Log the full users array (debug)
console.log(users);

// 1. Filter active users
console.log(users.filter((user) => user.isActive));

// 2. Filter users age 18 or older
console.log(users.filter((user) => user.age >= 18));

// 3. Filter users with emails ending with 'gmail.com'
console.log(users.filter((user) => user.email.endsWith("gmail.com")));

// 4. Map users to their full names
console.log(users.map((user) => user.fullName));

// 5. Map to strings with name and age
console.log(users.map((user) => `${user.fullName} (${user.age})`));

// 6. Map to add isAdult boolean (mutates original objects)
console.log(
  users.map((user) => {
    user.isAdult = user.age >= 18;
    return user;
  })
);

// 7. Sort users by ascending age
console.log(users.sort((a, b) => a.age - b.age));

// 8. Sort users by descending age
console.log(users.sort((a, b) => b.age - a.age));

// 9. Sort users alphabetically by first character of fullName
console.log(users.sort((a, b) => a.fullName[0].localeCompare(b.fullName[0])));

// 10. Reduce to sum total age
console.log(users.reduce((sum, user) => sum + user.age, 0));

// 11. Average age using reduce
console.log(users.reduce((sum, user) => sum + user.age, 0) / users.length);

// 12. Comma-separated string of all full names (using reduce)
console.log(
  users.reduce((str, user) => str + "," + user.fullName, "").slice(1)
);

// 13. Get full names of active users
console.log(users.filter((user) => user.isActive).map((user) => user.fullName));

// 14. Sort emails alphabetically using map + sort
console.log(users.map((user) => user.email).sort((a, b) => a.localeCompare(b)));

// 15. Get initials from full name
console.log(
  users.map((user) => {
    const parts = user.fullName.split(" ");
    return parts[0][0] + (parts[1] ? parts[1][0] : "");
  })
);

// 16. Sort users by last name
console.log(
  users.sort((a, b) => {
    const lastA = a.fullName.split(" ")[1] || "";
    const lastB = b.fullName.split(" ")[1] || "";
    return lastA.localeCompare(lastB);
  })
);

// 17. Filter users whose last name starts with a vowel
console.log(
  users.filter((user) => {
    const lastName = user.fullName.split(" ")[1] || "";
    return "aeiou".includes(lastName[0]?.toLowerCase());
  })
);

// 18. Count active users using reduce
const activeCount = users.reduce(
  (count, user) => count + (user.isActive ? 1 : 0),
  0
);
console.log(
  `${activeCount} are the active users, ${
    users.length - activeCount
  } are not active`
);

// 19. Get emails of users younger than 25
console.log(users.filter((user) => user.age < 25).map((user) => user.email));

// 20. Get full names of users with Yahoo emails
console.log(
  users
    .filter((user) => user.email.includes("yahoo"))
    .map((user) => user.fullName)
);

// 21. Group users by email domain
console.log(
  users.reduce((groups, user) => {
    const domain = user.email.split("@")[1];
    if (!groups[domain]) groups[domain] = [];
    groups[domain].push(user);
    return groups;
  }, {})
);

// 22. Find oldest user
console.log(
  users.reduce(
    (oldest, user) => (user.age > oldest.age ? user : oldest),
    users[0]
  )
);

// 23. Create lookup object with emails as keys and user objects as values
console.log(
  users.reduce((lookup, user) => {
    lookup[user.email] = user;
    return lookup;
  }, {})
);

// 24. Sort users by length of full name
console.log(users.sort((a, b) => a.fullName.length - b.fullName.length));

// 25. Map users to objects with fullName and birthYear (assuming current year 2025)
console.log(
  users.map((user) => ({
    fullName: user.fullName,
    birthYear: 2025 - user.age,
  }))
);

// 26. Count how many users have each age
console.log(
  users.reduce((ageCounts, user) => {
    ageCounts[user.age] = (ageCounts[user.age] || 0) + 1;
    return ageCounts;
  }, {})
);

// 27. Get full names of users whose first name length > 4
console.log(
  users
    .filter((user) => user.fullName.split(" ")[0].length > 4)
    .map((user) => user.fullName)
);

// 28. Map users to objects with firstName and lastName properties
console.log(
  users.map((user) => {
    const [firstName, lastName = ""] = user.fullName.split(" ");
    return { firstName, lastName };
  })
);

// 29. Count how many users have gmail or yahoo emails and how many don't
console.log(
  users.reduce(
    (counts, user) => {
      if (user.email.includes("gmail") || user.email.includes("yahoo"))
        counts.domain = (counts.domain || 0) + 1;
      else counts.noDomain = (counts.noDomain || 0) + 1;
      return counts;
    },
    { domain: 0, noDomain: 0 }
  )
);

// 30. Chain methods: filter active users, map last names, sort alphabetically, reduce to comma-separated string
console.log(
  users
    .filter((user) => user.isActive)
    .map((user) => user.fullName.split(" ")[1])
    .sort((a, b) => a.localeCompare(b))
    .reduce((str, lastName) => str + "," + lastName, "")
    .slice(1)
);
