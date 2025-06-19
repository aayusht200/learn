# JavaScript `.filter()` and `.sort()` Practice with Objects

This set of questions will help you practice filtering and sorting arrays of objects based on different conditions.

---

## 1. Filter Active Users

```js
const users = [
  { name: "John", isActive: true },
  { name: "Jane", isActive: false },
];
```

Task: Return only users with `isActive: true`

---

## 2. Filter by Minimum Age

Task: Return users whose age is greater than or equal to 18.

---

## 3. Filter by Email Domain

Task: Return users whose email ends in `@gmail.com`

---

## 4. Sort by Age Ascending

Task: Sort users by `age` from youngest to oldest.

---

## 5. Sort by Age Descending

Task: Sort users by `age` from oldest to youngest.

---

## 6. Sort Alphabetically by Name

Task: Sort users by the `name` property in A-Z order.

---

## 7. Filter Products in Stock

```js
const items = [
  { name: "pen", stock: 0 },
  { name: "book", stock: 4 },
];
```

Task: Return products with `stock > 0`

---

## 8. Sort by Last Name

Task: Assume each name is "First Last". Sort alphabetically by last name.

---

## 9. Filter Admin Users

Task: Return users where `role === 'admin'`

---

## 10. Sort by Custom Order (e.g. priority)

```js
const tasks = [
  { name: "Task A", priority: 2 },
  { name: "Task B", priority: 1 },
];
```

Task: Sort tasks from highest priority to lowest.

---

**Tip:** Use `.filter()` to remove unwanted data and `.sort()` to arrange data by key or rule.
