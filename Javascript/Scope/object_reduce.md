# JavaScript `.reduce()` Practice with Objects

These exercises focus on using `.reduce()` to aggregate or transform arrays of objects into summaries or new structures.

---

## 1. Sum All Ages

```js
const users = [
  { name: "John", age: 25 },
  { name: "Maya", age: 30 },
];
```

Task: Get the total age of all users.

---

## 2. Count Users with isActive

Task: Count how many users have `isActive: true`.

---

## 3. Group Users by City

```js
const users = [
  { name: "Aayush", city: "Mumbai" },
  { name: "Jay", city: "Delhi" },
  { name: "Trisha", city: "Mumbai" }
];
```

Task: Group users into an object with cities as keys.

---

## 4. Find Longest Name

Task: Return the user with the longest name.

---

## 5. Convert Array to ID Map

Task: Return an object where each key is a user's `id`, and value is the whole object.

---

## 6. Count Occurrences by Role

```js
const users = [
  { role: "admin" },
  { role: "user" },
  { role: "admin" },
];
```

Task: Return an object like `{ admin: 2, user: 1 }`

---

## 7. Calculate Average Score

Task: Compute the average score from a list of objects.

---

## 8. Find Maximum Score

Task: Return the object with the highest score.

---

## 9. Build a Comma-Separated List of Names

Task: Return a single string of names separated by commas.

---

## 10. Track Inventory

```js
const products = [
  { name: "pen", quantity: 2 },
  { name: "book", quantity: 3 },
];
```

Task: Return total quantity of all products.

---

**Tip:** `.reduce()` is powerful for turning an array into a single value—object, number, or string.
