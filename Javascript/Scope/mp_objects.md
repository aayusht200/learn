# JavaScript `.map()` Practice with Objects

Practice using the `.map()` method on arrays of objects to transform data. These exercises focus on converting object properties, reshaping structures, and creating new derived arrays.

---

## 1. Get All Names

```js
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];
```

Task: Return an array of all names.

---

## 2. Add isAdult Field

Task: Map the users and return a new array where each object has an additional `isAdult` property (true if age >= 18).

---

## 3. Extract Email Addresses

```js
const members = [
  { name: "Aayush", email: "aayush@example.com" },
  { name: "Maya", email: "maya@example.com" },
];
```

Task: Return an array of email addresses.

---

## 4. Combine Name and City

```js
const people = [
  { name: "Aayush", city: "Mumbai" },
  { name: "Jay", city: "Delhi" },
];
```

Task: Create an array of strings like: `"Aayush from Mumbai"`

---

## 5. Map Product IDs

```js
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Tablet" },
];
```

Task: Return an array of only the product IDs.

---

## 6. Format Prices

```js
const items = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 100 },
];
```

Task: Return an array of formatted strings like: `"Pen: ₹10"`

---

## 7. Add Serial Numbers

Task: Add a `serial` property starting from 1 in each object.

---

## 8. Uppercase Names

Task: Return a new array with all names in uppercase.

---

## 9. Map to Object with Initials

```js
const contacts = [{ name: "Alice Walker" }, { name: "Bob Smith" }];
```

Task: Return an array with initials (e.g., `AW`, `BS`).

---

## 10. Extract Year of Birth

Assume current year is 2025. Each user has an `age` property.
Task: Return an array of birth years.

---

**Tip:** `.map()` is best used for creating a new transformed array based on each element in the original array.
