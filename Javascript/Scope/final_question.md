# Final Practice Set: Array Methods (map, filter, sort, reduce)

These 30 questions are designed to reinforce your understanding of array methods using a consistent dataset, while gradually increasing in difficulty.

---

## Dataset

```js
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
```

---

## 🔹 Easy (1–10)

### 1. Use `.filter()` to get all active users.

### 2. Use `.filter()` to get users who are 18 or older.

### 3. Use `.filter()` to get users with Gmail accounts.

### 4. Use `.map()` to return just the user names.

### 5. Use `.map()` to return user name and age as a string like "John Doe (19)".

### 6. Use `.map()` to add an `isAdult` boolean to each user.

### 7. Use `.sort()` to sort users by age in ascending order.

### 8. Use `.sort()` to sort users by age in descending order.

### 9. Use `.sort()` to sort users alphabetically by full name.

### 10. Use `.reduce()` to sum the total age of all users.

---

## 🔸 Medium (11–20)

### 11. Use `.reduce()` to calculate the average age.

### 12. Use `.reduce()` to get a comma-separated list of all names.

### 13. Use `.filter()` and `.map()` together to get names of active users.

### 14. Use `.map()` and `.sort()` to list all emails alphabetically.

### 15. Use `.map()` to return initials (e.g., "JD" for John Doe).

### 16. Use `.sort()` to sort users by their last name.

### 17. Use `.filter()` to return users whose last name starts with a vowel.

### 18. Use `.reduce()` to count how many users are active and how many are not.

### 19. Use `.filter()` to find users younger than 25 and return their emails.

### 20. Use `.map()` and `.filter()` to return full names of users with Yahoo emails.

---

## 🔺 Hard (21–30)

### 21. Use `.reduce()` to group users by email domain (e.g., `gmail.com`, `yahoo.com`).

### 22. Use `.reduce()` to find the oldest user.

### 23. Use `.reduce()` to create a lookup object with emails as keys.

### 24. Use `.sort()` to sort users by the length of their full name.

### 25. Use `.map()` to return objects with name and birth year (assume current year is 2025).

### 26. Use `.reduce()` to build an object of user counts by age (e.g., `{18: 1, 19: 1}`).

### 27. Use `.filter()` and `.map()` to return names of users whose first name is longer than 4 characters.

### 28. Use `.map()` to return objects with separate `firstName` and `lastName` properties.

### 29. Use `.reduce()` to create an object that tracks how many users have each email domain.

### 30. Chain all methods: Filter active users, map to last names, sort them alphabetically, and reduce to a comma-separated string.

---

This final set provides comprehensive practice to prepare you for real-world data transformation with arrays of objects.
